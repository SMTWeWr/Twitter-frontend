import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Button, Typography} from "@material-ui/core";
import {useStylesSignIn} from "./stylesSignin";
import {Login} from "./components/Login";
import {Register} from "./components/Register";

type props = {
    setBlock: (boolean: boolean) => void
}

export const SignIn: React.FC<props> = ({setBlock}): React.ReactElement => {
    const classes = useStylesSignIn()
    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp' | null>()

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn')
        setBlock(true)
    }

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp')
        setBlock(true)
    }

    const handleCloseModal = (): void => {
        setVisibleModal(null)
        setBlock(false)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.leftSide}>
                <div className={classes.leftSideCov}>
                </div>
                    <TwitterIcon className={classes.leftSideBigIcon} style={{width: '350px', height: '350px'}}/>
            </div>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" style={{fontSize: '80px'}}/>
                    <Typography variant='h4' className={classes.loginSideTitle}>
                        Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button onClick={handleClickOpenSignUp} style={{marginBottom: '20px'}} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Войти</Button>
                    {visibleModal === 'signIn' && <Login open={visibleModal === 'signIn'} onClose={handleCloseModal}/>}
                    {visibleModal === 'signUp' && <Register open={visibleModal === 'signUp'} onClose={handleCloseModal}/>}
                </div>
            </section>
        </div>
    )
}

