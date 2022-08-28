import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";

export default function AppBar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <>
        {matches ? <AppBarMobile matches={matches}/> : <AppBarDesktop matches={matches}/>}
      </>
    );
}
