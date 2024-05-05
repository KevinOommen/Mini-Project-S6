import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FloatingAddButton = ({ addFoodItem }) => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleAddFoodItem = () => {
        // Pass input values to the addFoodItem function
        const foodItem = { name, price, imageUrl };
        addFoodItem(foodItem);
        // Clear input fields
        setName('');
        setPrice('');
        setImageUrl('');
        
        handleClose();
    };

    const body = (
        <Box
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}
        >
            <h2>Add a new food item</h2>
            <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label="Price"
                fullWidth
                margin="normal"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
                label="Image URL"
                fullWidth
                margin="normal"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleAddFoodItem}
                sx={{ width: '30%', marginTop: '1rem', marginRight: '1rem' }}
            >
                Add
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
                sx={{ width: '30%', marginTop: '1rem' }}
            >
                Cancel
            </Button>

        </Box>
    );

    return (
        <div>
            <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                <AddIcon />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="add-food-item-title"
                aria-describedby="add-food-item-description"
            >
                {body}
            </Modal>
        </div>
    );
};

export default FloatingAddButton;
