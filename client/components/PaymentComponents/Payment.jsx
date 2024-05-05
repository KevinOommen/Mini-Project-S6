// import { Box, Stack } from "@chakra-ui/react"
// import Card from './Card'
import axios from "axios";

export const checkoutHandler = async (amount) => {
    try {
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>;
      const {
        data: { key },
      } = await axios.get("http://localhost:4000/api/getkey");
  
      const {
        data: { order },
      } = await axios.post("http://localhost:4000/api/checkout", {
        amount,
      });
  
      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Smart Menu",
        description: "Eazy Order, Eazy Pay",
        image:
          "https://github.com/KevinOommen/Mini-Project-S6/blob/master/client/img/Smart%20Menu_blk.png",
        order_id: order.id,
        callback_url: "http://localhost:4000/api/paymentverification",
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => {
                const razor = new window.Razorpay(options);
                razor.open();
            };
            document.body.appendChild(script);
        

        
} catch (error) {
    console.error('An error occurred:', error);
  }
};

export default checkoutHandler;
{/* <Box>

//         <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

//             <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
//             <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

//         </Stack>
//     </Box> */}