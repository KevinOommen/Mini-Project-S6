import React from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import "./orderstyle.css";

export default function App() {
  const navigate = useNavigate();

  const orderItems = [
    { name: "Porotta", qty: 2, price: 10 },
    { name: "Chili Chicken", qty: 1, price: 140 },
    { name: "Gobi Manchurian", qty: 1, price: 100 },
    { name: "Shake", qty: 1, price: 80 }, 
    { name: "Tea", qty: 1, price: 10 }, 
    { name: "Juice", qty: 1, price: 40 }, 
  ];

  const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    navigate('/popup');
  };

  return (
    <div className="p-6 flex flex-col items-center" style={{ backgroundColor: 'white' }}> 
      <div className="custom-text card border p-4 rounded-lg text-center" style={{ paddingTop: '20px' }}>
        <div className="font">ORDER SUMMARY</div> 
        <hr />
        {orderItems.map((item, index) => (
          <div key={index} className="flex justify-between py-2 item-text">
            <span>{item.name}</span>
            <span>{item.qty}</span>
            <span>${(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="flex justify-between font-bold mt-4 total-text">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="mt-6 pt-4" style={{ marginTop: '20px' }}> 
          <Button color="primary" size="lg" style={{ width: '100%' }} onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}