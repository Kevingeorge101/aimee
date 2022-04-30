import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "typeface-cormorant";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import { auth } from "../FireBase";
import { useState } from "react";
import { logOut } from '../FireBase';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Playfair Display', 'serif',
      ].join(','),
  },});

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  


export default function ButtonAppBar() {

  let history = useHistory()

  return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
      <AppBar position="relative">
        <Toolbar sx={{justifyContent:'flex-end'}}>
        <Button color="inherit"  >User Name</Button>
          <Button color="inherit" onClick={()=>{ history.push('UserProfile') }}  >User Profile</Button>
          <Button color="inherit" onClick={()=>{ history.push('/') }} variant="outlined">Logout</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
  
