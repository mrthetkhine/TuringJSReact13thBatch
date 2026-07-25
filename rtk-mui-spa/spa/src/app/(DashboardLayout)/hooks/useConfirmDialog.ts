import * as React from "react";
import { useState } from "react";

function useConfirmDialog () {
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return [open, setOpen,handleClose];

}
export default useConfirmDialog;