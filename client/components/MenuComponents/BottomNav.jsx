import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 1) {
      navigate('/order');
    } else if (newValue === 0) {
      navigate('/menu');
    }
    else if (newValue === 2) {
      navigate('/payment');
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction label="Menu" icon={<HomeIcon />} />
          <BottomNavigationAction label="Checkout" icon={<ReceiptIcon />} />
          <BottomNavigationAction label="Pay" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}