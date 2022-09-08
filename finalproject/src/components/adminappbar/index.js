import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import AdminAppBarDesktop from "./AdminAppBarDesktop";

export default function AdimnAppBar() {
    const theme = useTheme();
    return (
      <>
 <AdminAppBarDesktop />
      </>
    );
}