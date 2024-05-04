import axios from 'axios';
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
  backgroundColor: green[400],
  '&:hover': {
    backgroundColor: green[500],
  },
  width : '100%',
}));

export default function ItemCard({id,item_id,title, img, qty, table_no}) {

  const handleClick = async () => {
    await axios.get("http://localhost:4000/kitchen/makehistory/"+id)
    window.location.reload();
  }

  return (
    <Card sx={{ display: 'flex', margin: 2, borderRadius:3,}}>
        <CardMedia
        component="img"
        sx={{ width: 175 }}
        image={img}
        alt={title}
         />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {qty}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Table No: {table_no}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>    
          <ColorButton variant="contained" onClick={handleClick}>
          Mark as Ready
        </ColorButton>

        </Box>
      </Box>
     
    </Card>
  );
}