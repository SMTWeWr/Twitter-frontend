import {useHomeStyles} from "../../pages/Home/stylesHome";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@mui/icons-material/Clear';
import React from "react";
import classNames from "classnames";


type ImageListProps = {
    images: string[]
    classes: ReturnType<typeof useHomeStyles>
    removeImage?: (url: string) => void
    customClass?: any
}

export const ShowImage: React.FC<ImageListProps> = ({classes, images, removeImage, customClass = null}) => {
    if (!images.length) {
        return null;
    }

    return (
        <>
            {images.map(url =>
                <div key={url} className={classNames(classes.imagesList, customClass)}>
                    <div className={classNames(classes.imagesListItem)}>
                        {removeImage && <IconButton onClick={(): void => removeImage(url)} color='primary'
                                                    className={classes.removeImage}
                                                    style={{backgroundColor: 'transparent'}}>
                            <ClearIcon className={classes.removeImageButton} sx={{fontSize: 24}}/>
                        </IconButton>}
                        <img src={url} alt='UploadPhoto'/>
                    </div>
                </div>
            )}
        </>
    )
}
