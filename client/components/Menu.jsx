import { useState, useEffect } from 'react';
import BottomNav from './MenuComponents/BottomNav';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Logo from './Logo';
import axios from 'axios';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const { data } = await axios.get("http://localhost:4000/menu/getmenu");
      setMenuItems(data);
    };

    fetchMenu();
  }, []);

  return (
    <>
      <Logo />
      <Box sx={{ width: "100%", textAlign: 'center', padding: "2%" }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          sx={{
            borderRadius: '15px',
            '& fieldset': {
              borderRadius: '25px',
            },
            width: '95%',
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
          <MenuItemCard key={index} title={item.Name} img={item.image} price={"$"+item.Price} />
        ))}
      </Box>
      <BottomNav />
    </>
  );
};

export default Menu;