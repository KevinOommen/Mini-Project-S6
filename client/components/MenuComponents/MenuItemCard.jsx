import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@nextui-org/button';
import { styled } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import {grey} from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
  color: grey[900],
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));

//counter button with increment and decrement
const Counter = ({count, setCount, setAdded})=> {
  const handleIncrement = () => {
    setCount(count + 1);
  }
  const handleDecrement = () => {
    if (count === 1){
      setAdded(false);
      setCount(0);
    }
    else if(count > 1)
      setCount(count - 1);
      
  }
  return (
    <Box>
      <Button onClick={handleIncrement}>+</Button>
      <Button>{count}</Button>
      <Button onClick={handleDecrement}>-</Button>
      
    </Box>
  )
}

export default function MenuItemCard({title, img, price}) {
  const [added, setAdded] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    if(count==0){
      setAdded(true);
      setCount(1);
    }
    else
      setAdded(false);
    console.log("Added: ", added);
    
  }

  return (
    <Card sx={{ display: 'flex', margin: 2, borderRadius:3}}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={img}
        alt="Paneer Curry"
         />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>    
        {
        added ? 
        <Counter count={count} setCount={setCount} setAdded={setAdded}/>
          :  
          <ColorButton variant="contained" onClick={handleClick}>
          Add
        </ColorButton>
        }

        </Box>
      </Box>
     
    </Card>
  );
}