import { useState, useEffect } from 'react';
import BottomNav from './MenuComponents/BottomNav';
import Box from '@mui/material/Box';
import MenuItemCard from './MenuComponents/MenuItemCard';
import axios from 'axios';
import Logo from "./Logo";
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
        title: "Beef Curry",
        img: "../img/menuItems/paneer.jpg",
        price: "$10",
      },
      
  ];
const Menu = () => {
    const [itemList, setItemList] = useState([]);
    const [addedItems, setAddedItems] = useState([]);
    //fetch added items from local storage
    useEffect(() => {
      const storedItems = JSON.parse(localStorage.getItem("addedItems"));
      if(storedItems){
        setAddedItems(storedItems);
      }   
    }, []);
    useEffect(() => {
      const fetchMenu = async () => {
        try {
          const { data } = await axios.get("http://localhost:4000/menu/getmenu");
          console.log(data);
          setItemList(data);
        } catch (error) {
          console.error('An error occurred while fetching the menu:', error);
        }
      };
    
      fetchMenu();
    }, []);

    const addToOrder = (item, count) => {
      //remove item if count is 0
      if(count === 0){
        item.count = count;
        const newAddedItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
        setAddedItems(newAddedItems);
        console.log(newAddedItems);

        //add newAddeditems to local storage
        localStorage.setItem("addedItems", JSON.stringify(newAddedItems));


      }
      else{
        //update item in the addedItems list with the new count
        item.count = count;
        const newAddedItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
        setAddedItems([...newAddedItems, item]);
        console.log([...newAddedItems, item]);
        //add newAddeditems to local storage
        localStorage.setItem("addedItems", JSON.stringify([...newAddedItems, item]));

      }
    }
   
    return (
        <>
        <Logo/>
        <Box sx={{width:"100%", textAlign:'center',padding:"5%"}}>
        </Box>
          <Box sx={{width:"100%"}}>
        
            {itemList.map((item, index) => (  
              <MenuItemCard key ={index} countIn={(addedItems.find(addedItem => addedItem.id === item.id)?.count) || 0} 
              item={item} onAddToOrder={addToOrder}/>
            
            ))}
          </Box> 
       
        <BottomNav/>
        </>
    );
};

export default Menu;