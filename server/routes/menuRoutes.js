import express from "express";
import { createClient } from '@supabase/supabase-js';
import { config } from "dotenv";
config({ path: './config/config.env' });

const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.get("/getmenu", async (req, res) => {
    try {
      let { data, error } = await supabase
        .from('Menu')
        .select('*');
      if (error) throw error;
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });

  router.get("/getordersummary", async (req, res) => {
    const { data, error } = await supabase
      .from('orderSummary')
      .select('id,item, qty, price');
    if (error) throw error;
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching menu items' });
    } else {
      res.json(data);
    }
  });

  

  export default router;