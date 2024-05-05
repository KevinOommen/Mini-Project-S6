import { instance } from "../server.js";
import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";
import { config } from 'dotenv';
config({ path: './config/config.env' });

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