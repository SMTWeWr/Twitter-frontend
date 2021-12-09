import React, {useEffect, useState} from 'react';
import {SignIn} from "./pages/SignIn/SignIn";
import {Route, Switch, useHistory} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "./store/ducks/user/userAction";
import {LoadingState} from "./store/ducks/user/userState";
import {selectUserIsAuthData, selectUserStatus} from "./store/ducks/user/userSelectors";
import {Layout} from "./components/Layout";
import TwitterIcon from '@mui/icons-material/Twitter';
import {UserPage} from "./pages/User/User";


function App() {
    const dispatch = useDispatch()
    const history = useHistory()
    const loadingStatus = useSelector(selectUserStatus)
    const isAuth = useSelector(selectUserIsAuthData)

    const [blockSignIn, setBlockSignIn] = useState(false);
    const isReady = loadingStatus !== LoadingState.NEVER && loadingStatus !== LoadingState.LOADING

    useEffect(() => {
        dispatch(fetchUserData())
    }, [dispatch])

    useEffect(() => {
        if (!isAuth && isReady) {
            history.push('/SignIn')
        } else if (isAuth) {
            history.push('/home')
        }
    }, [isAuth, isReady, history])

    const setBlock = (props: boolean) => {
        setBlockSignIn(props)
    }

    const showReload = () => {
        return <div>
            <TwitterIcon style={{position: 'absolute', top: '43%', left: '45%', fontSize: 130}} color='primary'/>
        </div>
    }

    if (!isReady && !blockSignIn) {
        return showReload()
    }

    return (
        <div className="App">
            <Switch>
                <Route exact path='/SignIn' render={() => <SignIn setBlock={setBlock}/>}/>
                {!isReady ? showReload() : <Layout>
                    <Route path='/home' component={Home}/>
                    <Route path="/user/:id" component={UserPage} exact/>
                </Layout>}
            </Switch>
        </div>
    )
}

export default App;
