import Snackbar from '@material-ui/core/Snackbar';
import Alert, { Color } from '@material-ui/lab/Alert';
import React from 'react'

type SnackBarProps = {
    text: string
    type: Color
    open: boolean
    onClose: () => void
}

export const SnackBar: React.FC<SnackBarProps> = ({text, type, open, onClose,}): React.ReactElement => {

    return (
        <>
            <Snackbar open={open} autoHideDuration={4000}
                      onClose={onClose}>
                <Alert
                    onClose={onClose}
                    severity={type}>
                    {text}
                </Alert>
            </Snackbar>
        </>
    )
}
