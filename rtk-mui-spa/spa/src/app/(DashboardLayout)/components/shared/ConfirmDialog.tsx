import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
interface ConfirmDialogProps {
    title:string;
    content:string;
    open: boolean;
    handleClose: () => void;
    onConfirm: () => void;

}
export default function ConfirmDialog({
    title,
    content,
    open,
    handleClose,
    onConfirm,
                                      }:ConfirmDialogProps) {
    const confirmHandler = ()=>{
        onConfirm();
        handleClose();
    }
    return (
        <React.Fragment>

            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
                role="alertdialog"
            >
                <DialogTitle>
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={confirmHandler} autoFocus>
                        Yes
                    </Button>
                    <Button onClick={handleClose}>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
