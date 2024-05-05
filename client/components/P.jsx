import axios from "axios";
import { useEffect } from 'react';
import RazorpayLogo from "../img/smart_menu.png";

const PaymentComponent = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
  
      const fetchKey = async (amount=0) => {
        try{
            const data = JSON.parse(localStorage.getItem("addedItems") || '[]');
            const totalPrice = data.reduce((total, item) => total + item.Price * item.count, 0);

            console.log(totalPrice); // Outputs: 320
            amount = totalPrice;
            const { data: { key } } = await axios.get('/api/getkey');
        const { data: { order }} = await axios.post("http://localhost:4000/api/checkout", {amount,});
        const options = {
          key,
    amount : order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Acme Corp", //your business name
    description: "Test Transaction",
    image: RazorpayLogo,
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com", 
        "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
    },
    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {
        "color": "#3399cc"
    }
};
const rzp1 = new window.Razorpay(options);
      document.getElementById('rzp-button1').onclick = function(e) {
        rzp1.open();
        e.preventDefault();
      };
    } catch (error) {
        console.error('An error occurred:', error);
       }
};
    

    fetchKey();
  }, []);

  return (
    <button id="rzp-button1">Pay</button>
  );
};

export default PaymentComponent;