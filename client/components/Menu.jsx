import BottomNav from './MenuComponents/BottomNav';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
import Logo from './Logo';

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
      <Logo/>
      <Box sx={{width:"100%", textAlign:'center',padding:"5%"}}>
      </Box>
      <Box sx={{width:"100%"}}>
      
         {data.map((d, index) => (
         <MenuItemCard key={index} title={d.title} img={d.img} price={d.price}/>
         ))}
      </Box> 
      
      <BottomNav/>
      </>
    );
};

export default Menu;
/* */