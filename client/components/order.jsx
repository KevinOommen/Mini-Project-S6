import React from "react";
import { Button } from "@nextui-org/react";
import "./orderstyle.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const orderItems = [
    { name: "Porotta", price: 10 },
    { name: "Chili Chicken", price: 140 },
    { name: "Gobi Manchurian", price: 100 },
    { name: "Shake", price: 80 }, 
    { name: "Tea", price: 10 }, 
    { name: "Juice", price: 40 }, 
  ];

  const totalAmount = orderItems.reduce((sum, item) => sum + item.price, 0);

  return (
    
    <div className="p-6 flex flex-col items-center" style={{ backgroundColor: 'white' }}> 
      <div className="custom-text card border p-4 rounded-lg text-center" style={{ paddingTop: '20px' }}>
        
        <div className="font">ORDER SUMMARY</div> 
        <hr />
        {orderItems.map((item, index) => (
          <div key={index} className="flex justify-between py-2 item-text">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
        <hr />
        <div className="flex justify-between font-bold mt-4 total-text">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
        <div className="mt-6 pt-4" style={{ marginTop: '20px' }}> 
          <Button color="primary" size="lg" style={{ width: '100%' }}>
            Make Payment
          </Button>
        </div>
        </div>
        
      </div>
  );
}
