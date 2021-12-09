import {makeStyles} from "@material-ui/core";
import a from '../../image/twitterBack.png'

export const useStylesSignIn = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden'
    },
    leftSide: {
        position: 'relative',
        flex: '0 0 54%',
        overflow: 'hidden',
    },
    leftSideCov: {
        backgroundImage: `url('${a}')`,
        height: '100%',
        width: '100%',
        backgroundSize: 'inherit',
        backgroundPosition: 'center'
    },
    leftSideBigIcon: {
        color: 'white',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
    },
    loginSide: {
        flex: '0 0 46%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginSideWrapper: {
        width: 400,
        transition: '100ms linear',
        [theme.breakpoints.down(880)]: {
            width: 200,
            transition: '100ms linear'
        }
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginTop: 20,
        marginBottom: 45,
    },
    loginFormControl: {
        '& .MuiFormControl-root': {
            marginBottom: 20,
        },
        '& .MuiFormGroup-root': {
            marginBottom: 15,
        }
    },
}))

