import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./orderstyle.css";
import axios from "axios";
import BottomNav from "./MenuComponents/BottomNav";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import {checkoutHandler} from "./PaymentComponents/Payment";

export default function Order() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handlePay = () => {
    setOpen(false);
    checkoutHandler();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePlaceOrder = () => {
    handleOpen();
  };

  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/menu/getordersummary");
        setOrderItems(data);
      } catch (error) {
        console.error('An error occurred while fetching the order:', error);
      }
    };
  
    fetchOrder();
  }, []);

  const totalAmount = orderItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // const handlePlaceOrder = () => {
  //   navigate("/popup");
  // };

  return (
    <>
      <div
        className="p-6 flex flex-col items-center"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="custom-text card border p-4 rounded-lg text-center"
          style={{ paddingTop: "20px" }}
        >
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
          <div className="mt-6 pt-4" style={{ marginTop: "20px" }}>
            <Button
              color="primary"
              size="lg"
              style={{ width: "100%" }}
              onClick={handlePlaceOrder}
            >
              Place Order
            </Button>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Payment Option</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Would you like to pay now or later?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handlePay} color="primary">
                  Pay Now
                </Button>
                <Button onClick={handleClose} checkoutHandler={checkoutHandler} color="secondary">
                  Pay Later
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
