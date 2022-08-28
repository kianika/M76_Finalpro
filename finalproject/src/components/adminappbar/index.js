import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import AdminAppBarDesktop from "./AdminAppBarDesktop";
import AdminAppBarMobile from "./AdminAppBarMobile";

export default function AdimnAppBar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
      <>
        {matches ? <AdminAppBarMobile matches={matches}/> : <AdminAppBarDesktop matches={matches}/>}
      </>
    );
}