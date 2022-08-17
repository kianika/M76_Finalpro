import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Products() {
  
    return (
      
        <Stack direction="row" spacing={150} mt={4} mx={4} className="header">
        <Button variant="contained" color="success">
          افزودن کالا
        </Button>
        <Typography variant="h4" >
  مدیریت کالاها
</Typography>
      </Stack>
    );
  }
  
  export default Products;