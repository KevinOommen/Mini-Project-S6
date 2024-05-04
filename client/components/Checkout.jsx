import PropTypes from "prop-types";
import { List, ListItem, ListItemText, Typography } from '@mui/material';
const Bill = ({ items }) => {
  const total = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Typography variant="h6">Bill</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`${item.price}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total}</Typography>
    </div>
  );
};

Bill.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Bill;
