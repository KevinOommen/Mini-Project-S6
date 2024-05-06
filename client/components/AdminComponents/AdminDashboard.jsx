//create a new component called AdminDashboard
import React from 'react';
import AdminDashboardTable from './AdminDashboardTable';
import FloatingAddButton from './FloatingAddButton';
import supabase from '../utils/supabase'; 
//function to add a new food item
const addFoodItem = async ({name, price, image}) => {
    const { data, error } = await supabase.from('Menu').insert([
        {Name: name, Price: price, image: image },
    ]);
    if (error) {
        console.error('Error adding food item:', error.message);
        return;
    }
    alert('Food item added successfully!');
    console.log('Food item added:', data);
}
const AdminDashboard = () => {
    return (
        <>
        <h1 style={{textAlign:'center'}}>Admin Dashboard</h1>
        <AdminDashboardTable />
        <FloatingAddButton addFoodItem={addFoodItem}/>
        </>
    );
}   
export default AdminDashboard;
