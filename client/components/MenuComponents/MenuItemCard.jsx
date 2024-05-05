import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import green from '@mui/material/colors/green';
import {grey} from '@mui/material/colors';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


const ColorButton = styled(Button)(({ theme }) => ({
  color: grey[900],
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));

//counter button with increment and decrement
const Counter = ({count, setCount, item, onAddToOrder})=> {
  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onAddToOrder(item, newCount);


  }
  const handleDecrement = () => {
    if (count === 1){
      setCount(0);
      onAddToOrder(item, 0);

    }
    else if(count > 1){
      const newCount = count - 1;
      setCount(newCount);
      onAddToOrder(item, newCount);
    }
      
  }
  return (
    <Box>
      <ButtonGroup size="large" aria-label="large button group">
      <Button onClick={handleIncrement} size="large">+</Button>
      <Button size="large">{count}</Button>
      <Button onClick={handleDecrement} size="large">-</Button>
      </ButtonGroup>
    </Box>
  )
}

export default function MenuItemCard({item, countIn, onAddToOrder}) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(countIn);
  }, [countIn]);

  
  const handleClick = () => {
      setCount(1);
      onAddToOrder(item, 1);
  }

  return (
    <Card sx={{ display: 'flex', margin: 2, borderRadius:3}}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={item.image}
        alt="Food Item"
         />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {item.Name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {"$"+item.Price}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>    
        {
        (count > 0) ? 
        <Counter count={count} setCount={setCount} item={item} onAddToOrder={onAddToOrder}/>
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