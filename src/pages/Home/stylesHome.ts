import {colors, makeStyles, Theme} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh',
    },
    logo: {
        margin: '10px 0',
        [theme.breakpoints.down(780)]: {
            left: -10,
        },
        '& .MuiSvgIcon-root': {
            fontSize: 50
        },
    },
    sideBarList: {
        position: 'sticky',
        listStyle: 'none',
        top: 0,
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideBarListItem: {
        position: 'relative',
        [theme.breakpoints.down(960)]: {
            width: 8,
            left: -15
        },
        [theme.breakpoints.down(600)]: {
            width: 8,
            left: -12
        },
        '& a': {
            textDecoration: 'none',
            color: 'black',
        },
        '& div': {
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 15,
            transition: 'background-color 0.1s ease-in-out',
            [theme.breakpoints.down(780)]: {
                padding: '0 0',
                left: 7
            },
            [theme.breakpoints.up(960)]: {
                width: '80%',
            },
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                [theme.breakpoints.down(760)]: {
                    backgroundColor: '#fff'
                },
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
        },
        [theme.breakpoints.down(600)]: {
            '& .MuiIconButton-colorPrimary': {
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                }
            }
        },
    },
    sideBarListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 10,
    },
    sideBarHover: {
        fontSize: 20,
        color: 'red',
        whiteSpace: 'nowrap',
    },
    sideBarListItemIcon: {
        fontSize: 32,
        marginLeft: 3,
    },
    colorIcon: {
        [theme.breakpoints.down(960)]: {
            '&:hover': {
                '& svg path': {
                    fill: 'red !important'
                }
            }
        },
    },
    sideBarTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2),
        [theme.breakpoints.down(960)]: {
            left: 10
        },
        [theme.breakpoints.down(780)]: {
            left: -3,
        },
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        minHeight: '100vh',
        borderTop: '0',
        borderBottom: '0',
        color: 'inherit',
        textDecoration: 'none'
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center',
    },
    tweetsHeader: {
        top: 0,
        display: 'flex',
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
        '& button': {
            marginRight: 10
        }
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    tweetPopupMenu: {},
    tweetContent: {
        flex: 1
    },
    tweetHeaderInfo: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: 25
    },
    currentTweetWrapper: {
        padding: 22
    },
    currentTweetUser: {
        display: 'flex',
        color: 'black',
        textDecoration: 'none'
    },
    tweetsHeaderUser: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        marginBottom: 10
    },
    currentTweetText: {
        paddingTop: 13,
        paddingLeft: 10,
        fontSize: 24,
        lineHeight: 1.3,
        wordBreak: 'break-word',
        [theme.breakpoints.down(780)]: {
            wordBreak: 'break-all',
        },
    },
    tweetsMainHeader: {
        display: 'flex',
        alignItems: 'center',
        zIndex: 1,
        position: 'sticky',
        top: 0,
    },
    tweet: {
        display: 'flex',
        cursor: 'pointer',
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetAvatar: {
        left: -10,
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetTextFormat: {
        position: 'initial',
        wordBreak: 'break-word',
        paddingRight: 25,
        [theme.breakpoints.down(780)]: {
            wordBreak: 'break-all',
        },
    },
    tweetImageWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    currentTweetImages: {
        position: 'relative',
        left: 12,
        justifyContent: 'space-around',
        marginBottom: 10
    },
    tweetImageInside: {
        position: 'relative',
        left: '-4.5%',
        [theme.breakpoints.down(763)]: {
            justifyContent: 'space-around',
            left: -25,
        },
    },
    tweetImageFormat: {
        width: 100,
        height: 100,
        margin: 10
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: -13,
        justifyContent: 'space-between',
        minWidth: 100,
        marginTop: 25,
        '& span': {
            position: 'absolute',
            fontSize: 18,
        },
    },
    tweetUserName: {
        color: grey[500],
    },
    tweetModal: {
        width: 500,
        minHeight: 100
    },
    currentTweetFooter: {
        margin: '0 auto',
        borderTop: '1px solid #E6ECF0',
        left: 0,
        maxWidth: '100%',
        justifyContent: 'space-around',
        paddingTop: 20,
        marginTop: 20,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    rightSideBlockUsers: {
        paddingLeft: 7,
    },
    rightSideBlockTags: {
        color: 'inherit',
        textDecoration: 'none'
    },
    addForm: {
        width: 'auto',
        padding: 20,
        paddingBottom: 5,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: 5,
        // alignItems: 'center',
        minWidth: 220,
    },
    addFormBottomActions: {
        marginTop: 10,
        [theme.breakpoints.down(690)]: {
            paddingTop: 10,
            top: -10,
            position: 'relative',
            left: -13
        },
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    textProgressLowSize: {
        position: 'relative',
        top: 10,
        [theme.breakpoints.down(690)]: {
            display: 'none'
        },
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        position: 'absolute',
        justifyContent: 'end',
        marginTop: -32,
        top: 51,
        right: 0,
        [theme.breakpoints.down(690)]: {
            position: 'absolute',
            right: 0
        },
    },
    imageWrapper: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    imagesList: {
        width: 200,
        height: 200,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        margin: 20,
        flexWrap: 'wrap',
        [theme.breakpoints.down(1200)]: {
            width: 170,
            height: 170,
        },
        [theme.breakpoints.down(1083)]: {
            width: 150,
            height: 150,
        },
        [theme.breakpoints.down(1003)]: {
            width: 120,
            height: 120,
        },
        [theme.breakpoints.down(960)]: {
            width: 150,
            height: 150,
        },
        [theme.breakpoints.down(866)]: {
            width: 130,
            height: 130,
        },
        [theme.breakpoints.down(796)]: {
            width: 110,
            height: 110,
        },
        [theme.breakpoints.down(695)]: {
            width: 130,
            height: 130,
        },
    },
    imagesListItem: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 6,
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'fill'
        }
    },
    currentImageStyle: {
        width: 350,
        height: 350,
        [theme.breakpoints.down(630)]: {
            width: 180,
            height: 180,
        },
    },
    removeImage: {
        position: 'absolute',
        left: 185,
        top: -13,
        padding: 2
    },
    removeImageButton: {
        borderRadius: '50%',
        '&:hover': {
            background: 'silver'
        }
    },
    sideProfile: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        bottom: -85,
        left: -2,
        padding: '10px 10px',
        width: 215,
        borderRadius: 50,
        cursor: 'pointer',
        backgroundColor: 'rgba(215,212,212,0.28)',
        '&:hover': {
            backgroundColor: colors.lightBlue[50],
        },
    },
    sideProfileInfo: {
        flex: 1,
        marginLeft: 10,
        '& b': {
            fontSize: 16,
        },
    },
    profileMenu: {
        opacity: 1,
        transform: 'transition(20%) none 1s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        bottom: -172,
        boxShadow: '0px 0px 18px 9px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255,255,255,0.55)',
        padding: 15,
        borderRadius: 20,
        width: 200,
    },
    profileMenuItem: {
        textDecoration: 'none',
        color: 'black',
        fontWeight: 500,
        cursor: 'pointer',
        '&:hover': {
            color: '#37b1ea',
        },
        '&:first-child': {
            borderBottom: 'none',
            paddingBottom: 7,
        }
    },
    searchBlock: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        paddingTop: 30,
        '& h6': {
            padding: 20,
            textAlign: 'center'
        },
        '& a': {
          textDecoration: 'none'
        },
    },
}));