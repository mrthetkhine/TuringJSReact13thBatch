import * as React from "react";
import { useState } from "react";

function useDialog () {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    return {
        open,setOpen,handleClose
    };

}
export default useDialog;