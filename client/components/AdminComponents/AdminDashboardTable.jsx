import * as React from 'react';
import { styled } from '@mui/system';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import supabase from '../utils/supabase'; // Import the Supabase client

const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
  margin: 'auto',
  width: '500px',
}));

const AdminDashboardTable = () => {
  const [foodItems, setFoodItems] = React.useState([]);

  React.useEffect(() => {
    fetchFoodItems();
  }, []);

  const fetchFoodItems = async () => {
    try {
      const { data, error } = await supabase.from('Menu').select('*');
      if (error) {
        throw error;
      }
      setFoodItems(data);
    } catch (error) {
      console.error('Error fetching food items:', error.message);
    }
  };

  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="food items table">
        <TableHead>
          <TableRow>
            <TableCell>Food Name</TableCell>
            <TableCell >Price</TableCell>
            <TableCell >Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodItems.map((foodItem) => (
            <TableRow key={foodItem.id}>
              <TableCell component="th" scope="row">
                {foodItem.Name}
              </TableCell>
              <TableCell >${foodItem.Price.toFixed(2)}</TableCell>

              <TableCell >
                <img src={foodItem.image} alt={foodItem.Name} style={{ width: '50px', height: '50px' }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default AdminDashboardTable;