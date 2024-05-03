import express from "express";
import { createClient } from '@supabase/supabase-js';
import { config } from "dotenv";
config({ path: './config/config.env' });

const router = express.Router();
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.get("/getpending", async (req, res) => {
    try {
      let { data, error } = await supabase
        .from('kitchenPendingOrders')
        .select('*');
      if (error) throw error;
  
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });

router.get("/makehistory/:id", async (req, res) => {
    try {
        const {data,error} = await supabase
        .from('kitchenPendingOrders')
        .select()
        .eq('id', req.params.id);
        console.log('Hello'+ data);
        console.log(data[0].id);

        const { data1, error1 } = await supabase
        .from('kitchenHistory')
        .insert({id :data[0].id,
            item_id: data[0].item_id,
            name: data[0].name,
            img: data[0].img,
            quantity: data[0].quantity,
            price: data[0].price,
            table_no: data[0].table_no,
        });
        const { error2 } = await supabase
        .from('kitchenPendingOrders')
        .delete()
        .eq('id', data[0].id);
        if (error2) throw error2;
    } catch (error) {
      console.error('Error fetching data:',error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }

  });

router.get("/gethistory", async (req, res) => {
    try {
      let { data, error } = await supabase
        .from('kitchenHistory')
        .select('*');
      if (error) throw error;
  
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });
export default router;
