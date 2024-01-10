// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect} from 'react';
import styles from './app.module.scss';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Drawer from './drawer/drawer';
import Header from './common/Header/Header';
import { useLocation } from 'react-router-dom';


export function App() {
  const [title, setTitle] = React.useState<null | string>(null); // Update the type of 'title' state variable
  const location = useLocation();

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g,' ')
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container> 
      <Drawer />
      <Header title={title}/>
      <Outlet />
    </Grid>
  ); 
}

export default App;
