import React from 'react';
import {Container, Grid, InputAdornment, Paper} from '@material-ui/core';
import {useHomeStyles} from "../pages/Home/stylesHome";
import {SideBar} from "./SideBar/SideBar";
import {SearchTextField} from "./RightSideBar/SearchTextField";
import SearchIcon from '@mui/icons-material/Search';
import {TagsBar} from "./RightSideBar/TagsBar";
import {ActualUsers} from "./RightSideBar/ActualUsers";


type LayoutProps = {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({children}): React.ReactElement => {
    const classes = useHomeStyles();

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid xs={1} md={3} item>
                    <SideBar classes={classes}/>
                </Grid>
                <Grid xs={7} md={6} item>
                    {children}
                </Grid>
                <Grid xs={4} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Поиск по Твиттеру"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>)}}
                            fullWidth
                        />
                        <Paper className={classes.rightSideBlock}>
                            <TagsBar classes={classes}/>
                        </Paper>
                        <Paper className={classes.rightSideBlock}>
                            <ActualUsers/>
                        </Paper>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
