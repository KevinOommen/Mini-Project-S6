import BottomNav from './MenuComponents/BottomNav';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const data = [
  {
    title: "Paneer Curry",
    img: "../img/menuItems/paneer.jpg",
    price: "$10",
  },
  {
    title: "Chicken Curry",
    img: "../img/menuItems/paneer.jpg",
    price: "$10",
  },
  {
    title: "Aloo Gobi",
    img: "../img/menuItems/paneer.jpg",
    price: "$25",
  },
  {
      title: "Paneer Curry",
      img: "../img/menuItems/paneer.jpg",
      price: "$10",
    },
    {
      title: "Chicken Curry",
      img: "../img/menuItems/paneer.jpg",
      price: "$10",
    },
    {
      title: "Aloo Gobi",
      img: "../img/menuItems/paneer.jpg",
      price: "$25",
    },
];

const Menu = () => {
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
        {data.map((d, index) => (
          <MenuItemCard key={index} title={d.title} img={d.img} price={d.price} />
        ))}
      </Box>
      <BottomNav />
    </>
  );
};

export default Menu;