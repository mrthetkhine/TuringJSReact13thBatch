import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Box,
  Menu,
  Button,
  IconButton,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { IconListCheck, IconMail, IconUser } from "@tabler/icons-react";

import { useBoundStore } from "@/app/stores/useBoundStore";


const Profile = () => {

  const router =useRouter();

  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const {logout} = useBoundStore();
  const handleLogout = ()=>{
    console.log('handleLogout');

    //dispatch(movieApiSlice.util.resetApiState());
    logout();
    router.push('/authentication/login');
    //dispatch(todoApiSlice.util.resetApiState());



  }

  return (
      <Box>
        <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
            sx={{
              ...(typeof anchorEl2 === "object" && {
                color: "primary.main",
              }),
            }}
            onClick={handleClick2}
        >
          <Avatar
              src="/images/profile/user-1.jpg"
              alt="image"
              sx={{
                width: 35,
                height: 35,
              }}
          />
        </IconButton>
        {/* ------------------------------------------- */}
        {/* Message Dropdown */}
        {/* ------------------------------------------- */}
        <Menu
            id="msgs-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            sx={{
              "& .MuiMenu-paper": {
                width: "200px",
              },
            }}
        >
          <MenuItem>
            <ListItemIcon>
              <IconUser width={20} />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconMail width={20} />
            </ListItemIcon>
            <ListItemText>My Account</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <IconListCheck width={20} />
            </ListItemIcon>
            <ListItemText>My Tasks</ListItemText>
          </MenuItem>
          <Box mt={1} py={1} px={2}>
            <Button

                variant="outlined"
                color="primary"
                fullWidth
                type={"button"}
                onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Menu>
      </Box>
  );
};

export default Profile;
