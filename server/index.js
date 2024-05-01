const express = require("express");
const { createClient } = require("@supabase/supabase-js");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => res.send("SmartMenu API is running"));

app.get("/check-connection", async (req, res) => {
    const { data, error } = await supabase.from("Menu").select('*');
  
    if (error) {
      console.error('Error: ', error);
      return res.status(500).json({ error: 'Unable to connect to Supabase' });
    }
    console.log(data);
    return res.status(200).json({ message: 'Connected to Supabase successfully', data });
  });

app.listen(port, () =>
  console.log(
    `Server is running on port ${port}...`
  )
);