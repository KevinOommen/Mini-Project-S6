import BottomNav from './BottomNav';
import axios from 'axios';
import Box from '@mui/material/Box';
import HistoryCard from './HistoryCard';
import Logo from '../Logo';

const { data } = await axios.get("http://localhost:4000/kitchen/gethistory")
console.log(data);
const Kitchen = () => {
   
    return (
        <>
        <Logo/>
        <Box sx={{width:"100%", textAlign:'center',padding:"5%"}}>
        </Box>
        <Box sx={{width:"100%"}}>
        
           {data.map((d, index) => (
           <HistoryCard id={d.id} key={index} title={d.name} img={d.img} qty={"Quantity : "+d.quantity} table_no={d.table_no}/>
           ))}
        </Box> 
        
        <BottomNav/>
        </>
    );
};

export default Kitchen;