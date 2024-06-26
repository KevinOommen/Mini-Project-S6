import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function HsitoryCard({id,item_id,title, img, qty, table_no}) {

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
      </Box>
     
    </Card>
  );
}