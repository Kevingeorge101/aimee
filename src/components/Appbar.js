import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import { auth } from "../FireBase";
import { useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF"
    },
  },
});

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme} enableColorOnDark>
        <AppBar position="relative">
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <Button color="primary">User Name</Button>
            <Button color="primary">User Profile</Button>
            <Button color="primary" variant="outlined">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}



/*
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FFFFFF',
      },
    },
  });
  

export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme} enableColorOnDark>
      <AppBar position="relative">
        <Toolbar sx={{justifyContent:'flex-end'}}>
        <Button color="inherit"  >User Name</Button>
          <Button color="inherit" >User Profile</Button>
          <Button color="inherit" variant="outlined">Logout</Button>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}
*/
