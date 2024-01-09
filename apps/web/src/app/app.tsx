// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Drawer from './drawer/drawer';


export function App() {
  return (
    <Grid container>
      <Drawer />
      <Outlet />
    </Grid>
  );
}

export default App;
