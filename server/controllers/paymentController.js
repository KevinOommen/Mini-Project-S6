import { instance } from "../server.js";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { config } from 'dotenv';
config({ path: './config/config.env' });

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    order,
  });
  console.log(options);
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
    .update(body.toString())
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;

  if (isAuthentic) {
    // Database comes here
    console.log(razorpay_order_id+"#"+ razorpay_payment_id+"#"+razorpay_signature)
    try {
        const { data, error } = await supabase.from("PaymentHistory").insert([
          {
            order_id :razorpay_order_id,
            payment_id :razorpay_payment_id,
            signature :razorpay_signature,
          },
        ]);
      
        if (error) {
          throw error;
        }
      
        // Continue with your code here if the insert operation was successful
      } catch (error) {
        console.error('Error inserting data:', error);
        // Handle the error here
      }
    // await Payment.create({
    //   razorpay_order_id,
    //   razorpay_payment_id,
    //   razorpay_signature,
    // });

    res.redirect(
      `http://localhost:5173/payment`
    );
  } else {
    res.status(400).json({
      success: false,
    });
  }
};
