import styles from './drawer.module.scss';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { mainDrawerItems } from './const/drawerItem';
import { drawerStyles } from './drawerStyle';
import { useParams, useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface DrawerProps {}

export function Drawer(props: DrawerProps)  {
  const navigate = useNavigate();
  return (
    <MuiDrawer
    // className={styles['drawer']}

        sx={drawerStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainDrawerItems.map((item, index) => (
            <ListItem
              key={item.id}
              onClick={() => navigate(item.route)}
            >
              <ListItemButton  
                // className={styles['icons']}
              >
                <ListItemIcon 
                  sx={drawerStyles.icons}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  sx={drawerStyles.text}
                  primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </MuiDrawer>
  );
}

export default Drawer;
