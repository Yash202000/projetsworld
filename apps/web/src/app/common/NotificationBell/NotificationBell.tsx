import React, { MouseEvent, useState } from "react";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

// interface notifications {
//     id: number;
//     label: string;
// }

const notifications = [
    {
        id: 0,
        label: 'First notification'
    },
    {
        id: 1,
        label: 'Second notification'
    },
];


const NotificationBell = ({ iconColor , badgeContent, onClick}: any) => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    // const [badgeContent, setBadgeContent] = useState<number>(0); // Declare badgeContent variable

    const noNotifications = 'No new notifications';
    const newNotifications = `You have ${notifications.length} new notifications!`; // Move newNotifications declaration here

    const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : undefined} // Update BadgeContent to badgeContent
                    aria-controls="notification-menu"
                    aria-haspopup="true"
                >
                    <Badge
                        badgeContent={notifications.length} // Update BadgeContent to badgeContent
                        color="error"
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </div>
    )
}

export default NotificationBell;
