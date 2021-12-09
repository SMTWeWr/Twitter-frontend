import {useHomeStyles} from "../../pages/Home/stylesHome";
import React, {useState} from "react";
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";
import CreateIcon from '@mui/icons-material/Create';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/NotificationsNone';
import MessageIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/ListAlt';
import UserIcon from '@mui/icons-material/PersonOutline';
import {ModalBlock} from "../ModalBlock/ModalBlock";
import {AddTweetForm} from "../Tweets/AddTweetForm";
import {Link} from "react-router-dom";
import {UserSideProfile} from "./UserSideProfile";
import {useSelector} from "react-redux";
import {selectUserId} from "../../store/ducks/user/userSelectors";


type SideBarProps = {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideBar: React.FC<SideBarProps> = ({classes}: SideBarProps): React.ReactElement => {
    const userData = useSelector(selectUserId)
    const [tweetModal, setTweetModal] = useState<boolean>(false);
    const [protect, setProtect] = useState({
        text: '',
        event: null
    });

    const onOpenTweetModal = (): void => {
        setTweetModal(true)
    }

    const onCloseTweetModal = (): void => {
        setTweetModal(false)
    }

    const onMouseOver = (e: React.MouseEvent | any) => {
        setProtect({text: 'В разработке', event: e.currentTarget.id})
    }

    const onMouseLeave = () => {
        setProtect({text: '', event: null})
    }

    const changeText = (text: string, id: string) => {
        if (protect.text && protect.event === id) {
            return <span className={classes.sideBarHover}>{protect.text}</span>
        }
        return text
    }

    return (
        <ul className={classes.sideBarList}>
            <li className={classes.sideBarListItem}>
                <Link to="/home" >
                <IconButton className={classes.logo} color="primary">
                    <TwitterIcon />
                </IconButton>
                </Link>
            </li>
            <li className={classes.sideBarListItem}>
                <div id='1' onMouseOver={(e) => onMouseOver(e)}
                     onMouseLeave={onMouseLeave}>
                    <SearchIcon className={classes.sideBarListItemIcon}/>
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel} variant="h6">
                            {changeText('Поиск', '1')}
                        </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem} >
                <div id='2' onMouseOver={(e) => onMouseOver(e)}
                     onMouseLeave={onMouseLeave}>
                    <NotificationIcon className={classes.sideBarListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideBarListItemLabel} variant="h6">
                        {changeText('Уведомления', '2')}
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div id='3' onMouseOver={(e) => onMouseOver(e)}
                     onMouseLeave={onMouseLeave}>
                    <MessageIcon className={classes.sideBarListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideBarListItemLabel} variant="h6">
                        {changeText('Сообщения', '3')}
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div id='4' onMouseOver={(e) => onMouseOver(e)}
                     onMouseLeave={onMouseLeave}>
                    <BookmarkIcon className={classes.sideBarListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideBarListItemLabel} variant="h6">
                        {changeText('Закладки', '4')}
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div id='5' onMouseOver={(e) => onMouseOver(e)}
                     onMouseLeave={onMouseLeave}>
                    <ListIcon className={classes.sideBarListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideBarListItemLabel} variant="h6">
                        {changeText('Список', '5')}
                    </Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <Link to={`/user/${userData}`} >
                <div>
                    <UserIcon className={classes.sideBarListItemIcon} />
                    <Hidden smDown>
                    <Typography className={classes.sideBarListItemLabel} variant="h6">
                        Профиль
                    </Typography>
                    </Hidden>
                </div>
                </Link>
            </li>
            <li className={classes.sideBarListItem}>
                <Button
                    onClick={onOpenTweetModal}
                    style={{minWidth: '55px', minHeight: '55px'}}
                    className={classes.sideBarTweetButton}
                    variant="contained"
                    color="primary"
                    fullWidth>
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden mdUp>
                        <CreateIcon />
                    </Hidden>
                </Button>
                <ModalBlock
                    customStyles={{position: 'fixed', top: '-10%'}}
                    visible={tweetModal} onClose={onCloseTweetModal}>
                    <div className={classes.tweetModal}>
                    <AddTweetForm maxRows={13} classes={classes}/>
                    </div>
                </ModalBlock>
            </li>
            <Hidden smDown>
            <UserSideProfile classes={classes}/>
            </Hidden>
        </ul>
    )
}
