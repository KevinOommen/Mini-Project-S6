import React from 'react';
import { Button } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';

const Popup = () => {
  const navigate = useNavigate();

  const handlePayNow = () => {
    navigate('/payment');
  };

  const handlePayLater = () => {
    navigate('/menu');
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-white p-8 rounded-md border border-gray-300">
        <h2 className="mb-6 text-center">Do you like to pay now or later?</h2>
        <div className="flex justify-around">
          <Button auto color="primary" onClick={handlePayNow}>
            Pay Now
          </Button>
          <Button auto color="secondary" onClick={handlePayLater}>
            Pay Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;