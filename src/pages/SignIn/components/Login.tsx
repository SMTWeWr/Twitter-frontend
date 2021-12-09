import React, {useEffect, useState} from 'react';
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {ModalBlock} from "../../../components/ModalBlock/ModalBlock";
import {useStylesSignIn} from "../stylesSignin";
import {SnackBar} from "../../../components/Utils/SnackBar";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignInUser} from "../../../store/ducks/user/userAction";
import {selectUserStatus} from "../../../store/ducks/user/userSelectors";
import {LoadingState} from "../../../store/ducks/user/userState";

type LoginProps = {
    open: boolean
    onClose: () => void
}

export type LoginFormProps = {
    email: string
    password: string
}

const LoginFormSchema = yup.object({
    email: yup.string().email().required('Это обязательное поле'),
    password: yup.string().min(6).required('Это обязательное поле'),
}).required();

export const Login: React.FC<LoginProps> = ({onClose, open}): React.ReactElement => {
    const classes = useStylesSignIn()
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus)

    const [authError, setAuthError] = useState(false);
    const [submitClick, setSubmitClick] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<LoginFormProps>({
        mode: 'onBlur',
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = (data: LoginFormProps) => {
        dispatch(fetchSignInUser(data))
        setSubmitClick(true)
    }

    const handleClose = () => {
        setAuthError(false)
    }

    useEffect(() => {
        if (loadingStatus === LoadingState.ERROR && submitClick) {
            setAuthError(true)
        }
    }, [loadingStatus, onClose, submitClick])

    return <ModalBlock
        visible={open}
        onClose={onClose}
        classes={classes}
        title="Войти в аккаунт">
        {authError && <SnackBar text='Неверный логин или пароль' type='error' open={authError} onClose={handleClose}/>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                    <TextField {...register('email')}
                               id='email' type='text' label='Email'
                                variant="filled" fullWidth
                               helperText={errors.email?.message}
                               error={!!errors.email}
                               autoFocus/>
                    <TextField {...register('password')}
                               id='password' type='password' label='Пароль'
                                variant="filled" fullWidth
                               helperText={errors.password?.message}
                               error={!!errors.password}/>
                    <Button disabled={loadingStatus === LoadingState.LOADING} type='submit' variant="contained"
                            color="primary" fullWidth>
                        Войти
                    </Button>
                </FormGroup>
            </FormControl>
        </form>
    </ModalBlock>
}
