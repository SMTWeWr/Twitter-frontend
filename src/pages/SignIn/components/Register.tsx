import React, {useEffect, useState} from 'react';
import {ModalBlock} from "../../../components/ModalBlock/ModalBlock";
import {Button, FormControl, FormGroup, TextField} from "@material-ui/core";
import {useStylesSignIn} from "../stylesSignin";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useDispatch, useSelector} from "react-redux";
import {selectUserStatus} from "../../../store/ducks/user/userSelectors";
import {LoadingState} from "../../../store/ducks/user/userState";
import {SnackBar} from "../../../components/Utils/SnackBar";
import {fetchSignUpUser} from "../../../store/ducks/user/userAction";


type RegisterProps = {
    open: boolean
    onClose: () => void
}

export type RegisterFormProps = {
    fullname: string
    username: string
    email: string
    password: string
    rePassword: string
}

const RegisterFormSchema = yup.object({
    fullname: yup.string().matches(/^([^0-9]*)$/, 'Имя не может содержать числа').required('Это обязательное поле'),
    username: yup.string().required('Это обязательное поле'),
    email: yup.string().email().required('Это обязательное поле'),
    password: yup.string().min(6, 'Введите 6 и более символов').required('Это обязательное поле'),
    rePassword: yup.string().oneOf([yup.ref('password'), null], 'Пароли не совпадают').required('Это обязательное поле'),
}).required()

export const Register: React.FC<RegisterProps> = ({open, onClose}): React.ReactElement => {
    const classes = useStylesSignIn()
    const dispatch = useDispatch()
    const loadingStatus = useSelector(selectUserStatus)

    const [registerError, setRegisterError] = useState(false);
    const [submitClick, setSubmitClick] = useState(false);

    const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormProps>({
        mode: "onBlur",
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = (data: RegisterFormProps) => {
        dispatch(fetchSignUpUser(data))
        setSubmitClick(true)
    }

    const handleClose = () => {
        setRegisterError(false)
    }

    useEffect(() => {
        if (loadingStatus === LoadingState.ERROR && submitClick) {
            setRegisterError(true)
        }
    }, [submitClick, loadingStatus])

    return (
        <ModalBlock
            visible={open}
            onClose={onClose}
            classes={classes}
            title="Создайте учетную запись">
            {registerError &&
            <SnackBar text='Ошибка регистрации, проверьте почту или логин' type='error' open={registerError} onClose={handleClose}/>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <TextField {...register('fullname', {required: true})}
                                   id='fullname' type='text' label='Имя'
                                   variant="filled" fullWidth
                                   helperText={errors.fullname?.message}
                                   error={!!errors.fullname}
                                   autoFocus/>
                        <TextField {...register('username', {required: true})}
                                   id='username' type='text' label='Логин'
                                   variant="filled" fullWidth
                                   helperText={errors.username?.message}
                                   error={!!errors.username}/>
                        <TextField {...register('email', {required: true})}
                                   id='email' type='email' label='Email'
                                   variant="filled" fullWidth
                                   helperText={errors.email?.message}
                                   error={!!errors.email}/>
                        <TextField {...register('password', {required: true})}
                                   id='password' type='password' label='Пароль'
                                   variant="filled" fullWidth
                                   helperText={errors.password?.message}
                                   error={!!errors.password}/>
                        <TextField {...register('rePassword', {required: true})}
                                     id='rePassword' type='password' label='Пароль'
                                     variant="filled" fullWidth
                                     color='primary'
                                     helperText={errors.rePassword?.message}
                                     error={!!errors.rePassword}/>
                        <Button disabled={loadingStatus === LoadingState.LOADING} type='submit' variant="contained"
                                color="primary" fullWidth>
                            Регистрация
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </ModalBlock>
    )
}