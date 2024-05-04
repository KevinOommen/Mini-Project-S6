import { useState, useEffect } from 'react';
import BottomNav from './MenuComponents/BottomNav';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
import { useEffect } from 'react';
import { useState } from 'react';
import React from 'react';

const data = [
    {
      id: 1,
      title: "Paneer Curry",
      img: "../img/menuItems/paneer.jpg",
      price: "$10",
    },
    {
      id: 2,
      title: "Chicken Curry",
      img: "../img/menuItems/paneer.jpg",
      price: "$10",
    },
    {
      id: 3,
      title: "Aloo Gobi",
      img: "../img/menuItems/paneer.jpg",
      price: "$25",
    },
    {
        id: 4,
        title: "Paneer Curry",
        img: "../img/menuItems/paneer.jpg",
        price: "$10",
      },
      {
        id: 5,
        title: "Chicken Curry",
        img: "../img/menuItems/paneer.jpg",
        price: "$10",
      },
      {
        id: 6,
        title: "Aloo Gobi",
        img: "../img/menuItems/paneer.jpg",
        price: "$25",
      },
      
  ];
const Menu = () => {
    const [itemList, setItemList] = useState(data);
    const [addedItems, setAddedItems] = useState([]);

    useEffect(() => {
        fetch("/api/menu")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setItemList(data);
        });
    }, []);

    const addToOrder = (item, count) => {
      //remove item if count is 0
      if(count === 0){
        item.count = count;
        const newAddedItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
        setAddedItems(newAddedItems);
        console.log(newAddedItems);

      }
      else{
        //update item in the addedItems list with the new count
        item.count = count;
        const newAddedItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
        setAddedItems([...newAddedItems, item]);
        console.log([...newAddedItems, item]);

      }
    }
   
    return (
        <>
        <Box sx={{width:"100%", textAlign:'center',padding:"5%"}}>
        </Box>
        <Box sx={{width:"100%"}}>
        
           {itemList.map((item, index) => (
           <MenuItemCard key ={index} item={item} onAddToOrder={addToOrder}/>
           ))}
        </Box> 
       
        <BottomNav/>
        </>
    );
};

export default Menu;