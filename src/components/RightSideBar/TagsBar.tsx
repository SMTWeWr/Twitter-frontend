import {CircularProgress, Divider, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";
import React from "react";
import {useHomeStyles} from "../../pages/Home/stylesHome";
import {useSelector} from "react-redux";
import {selectTags, selectTagsIsLoading} from "../../store/ducks/actualTags/tagsSelector";
import {Link} from "react-router-dom";

type TagsBarProps = {
    classes: ReturnType<typeof useHomeStyles>;
}

export const TagsBar: React.FC<TagsBarProps> = ({classes}): React.ReactElement => {
    const items = useSelector(selectTags)
    const isLoading = useSelector(selectTagsIsLoading)

    return (
        <>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Актуальные темы</b>
            </Paper>
            <List>
                {isLoading ?
                    <div className={classes.tweetsCentred}>
                        <CircularProgress/>
                    </div>
                    : items.map(item =>
                        <React.Fragment key={item._id}>
                            <Link to={`/home/search?q=${item.name}`} className={classes.rightSideBlockTags}>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={
                                            <Typography component="span" variant="body2" color="textSecondary">
                                                Твитов: {item.count}
                                            </Typography>
                                        }/>
                                </ListItem>
                            </Link>
                            <Divider component="li"/>
                        </React.Fragment>)}
            </List>
        </>
    )
}