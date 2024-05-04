import BottomNav from './BottomNavK';
import axios from 'axios';
import Box from '@mui/material/Box';
import ItemCard from './ItemCard';
import Logo from '../Logo';

const { data } = await axios.get("http://localhost:4000/kitchen/getpending")
console.log(data);
const Kitchen = () => {
   
    return (
        <>
        <Logo/>
        <Box sx={{width:"100%", textAlign:'center',padding:"5%"}}>
        </Box>
        <Box sx={{width:"100%"}}>
        
           {data.map((d, index) => (
           <ItemCard id={d.id} key={index} title={d.name} img={d.img} qty={"Quantity : "+d.quantity} table_no={d.table_no}/>
           ))}
        </Box> 
        
        <BottomNav/>
        </>
    );
};

export default Kitchen;
/* */