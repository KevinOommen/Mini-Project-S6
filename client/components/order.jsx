import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';
import "./orderstyle.css";

export default function Order() {
  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/ordersummary')
      .then(response => response.json())
      .then(data => setOrderItems(data));
  }, []);

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
            <span>{item.item}</span>
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