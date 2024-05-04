import React, { useEffect, useState } from 'react';
import BottomNav from './MenuComponents/BottomNav';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/get-menu')
      .then(response => response.json())
      .then(data => setMenuItems(data));
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", textAlign: 'center', padding: "5%" }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            borderRadius: '15px',
            '& fieldset': {
              borderRadius: '25px',
            },
            width: '80%',
            backgroundColor: 'white',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        {menuItems.map((item, index) => (
          <MenuItemCard key={index} title={item.Name} img={item.image} price={item.Price} />
        ))}
      </Box>
      
      <BottomNav />
    </>
  );
};

export default Menu;