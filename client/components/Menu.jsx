<<<<<<< HEAD
import NavMenu from './MenuComponents/NavMenu';
import MenuItemCardList from './MenuComponents/MenuItemCardList';


=======
import React from 'react';
import BottomNav from './MenuComponents/BottomNav';
//import NavMenu from './MenuComponents/NavMenu';
//import MenuItemCardList from './MenuComponents/MenuItemCardList';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
>>>>>>> 9560b6101ec72ff266dab74a1554e0cd8b05d010

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
        <Box sx={{width:"100%", textAlign:'center',padding:"5%"}}>
        </Box>
        <Box sx={{width:"100%"}}>
        
           {data.map((d) => (
           <MenuItemCard title={d.title} img={d.img} price={d.price}/>
           ))}
        </Box> 
       
        <BottomNav/>
        </>
    );
};

export default Menu;
/* */