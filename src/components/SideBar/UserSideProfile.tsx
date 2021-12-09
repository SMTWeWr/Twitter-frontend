import {useHomeStyles} from "../../pages/Home/stylesHome";
import React, {useEffect, useRef} from "react";
import {Avatar, colors, Typography} from "@material-ui/core";
import ArrowBottomIcon from '@mui/icons-material/KeyboardArrowDown';
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../../store/ducks/user/userSelectors";
import {fetchSignOutUser} from "../../store/ducks/user/userAction";


type UserSideProfileProps = {
    classes: ReturnType<typeof useHomeStyles>
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({classes}: UserSideProfileProps): React.ReactElement => {
    const dispatch = useDispatch()
    const userData = useSelector(selectUserData)
    const popupRef = useRef<HTMLDivElement>(null);
    const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false)


    const handleOpenPopup = (): void => {
        setVisiblePopup(true)
    }

    const handleClosePopup = () => {
        setVisiblePopup(false)
    }

    const handleSignOut = () => {
        setVisiblePopup(false)
        window.localStorage.removeItem('token')
        dispatch(fetchSignOutUser())
    }

    const handleOutsideClick = (e: MouseEvent | any) => {
        if (!e.path.includes(popupRef.current)) {
            setVisiblePopup(false)
        }
    }

    useEffect(() => {
        if (popupRef.current && visiblePopup) {
            document.body.addEventListener('click', handleOutsideClick)
        }
        return () => {
            document.body.removeEventListener('click', handleOutsideClick)
        }
    }, [visiblePopup]);

    return (
        <>
            {userData && <>
                <div onClick={handleOpenPopup} className={classes.sideProfile}>
                    <Avatar src={userData.avatarUrl}/>
                    <div className={classes.sideProfileInfo}>
                        <b>{userData.fullname}</b>
                        <Typography style={{color: colors.grey[500]}}>{userData.username}</Typography>
                    </div>
                    <ArrowBottomIcon/>
                </div>
                <div ref={popupRef}>
                    {visiblePopup &&
                    <div className={classes.profileMenu}>
                        <Link onClick={handleClosePopup} to={`/user/${userData._id}`}
                              className={classes.profileMenuItem}>Профиль</Link>
                        <li onClick={handleSignOut} className={classes.profileMenuItem}>Выйти</li>
                    </div>}
                </div>
            </>}
        </>
    )
}
