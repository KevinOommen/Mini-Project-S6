import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./orderstyle.css";
import axios from "axios";
import PaymentButton from "./P";
import BottomNav from "./MenuComponents/BottomNav";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Logo from "./Logo";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function Order() {
  const tableNo = JSON.parse(localStorage.getItem("tableNo"));
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
    const data = JSON.parse(localStorage.getItem("addedItems") || '[]');
    const tableNo = JSON.parse(localStorage.getItem("tableNo"));
    axios.post("http://localhost:4000/kitchen/addpending", {data,tableNo});
  };

  const handlePlaceOrder = () => {
    handleOpen();
  };

  const navigate = useNavigate();
  const [orderItems, setOrderItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        // const { data } = await axios.get(
        //   "http://localhost:4000/menu/getordersummary"
        // );
        // setOrderItems(data);
        const data = JSON.parse(localStorage.getItem("addedItems") || '[]');
        const totalAmount = data.reduce((total, item) => total + item.Price * item.count, 0);
        setTotalAmount(totalAmount);
        setOrderItems(data);
        console.log(orderItems)
      } catch (error) {
        console.error("An error occurred while fetching the order:", error);
      }
    };

    fetchOrder();
  }, []);



  return (
    <>
      <Logo tableNo={tableNo}/>
      <div style={{ height: "20px" }} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <div
        className="p-6 flex flex-col items-center"
        style={{ backgroundColor: "white" }}
      >
        <div
          className="custom-text card border p-4 rounded-lg text-center"
          style={{ paddingTop: "20px" }}
        >
          <div className="font">ORDER SUMMARY</div>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 300, fontFamily: "Roboto, Arial, sans-serif" }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Item</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderItems.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.Name}
                    </TableCell>
                    <TableCell align="right">{item.count}</TableCell>
                    <TableCell align="right">
                      ${(item.Price * item.count).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">${totalAmount.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
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
                <PaymentButton />
                <Button onClick={handleClose} color="secondary">
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
