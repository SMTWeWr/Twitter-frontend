import React from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import {useHistory} from "react-router-dom";

export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory()

    const handleClickButton = () => {
        history.goBack()
    }

    return (
        <IconButton onClick={handleClickButton} color="primary">
            <ArrowBackIcon />
        </IconButton>
    )
}
