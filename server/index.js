const express = require("express");
const { createClient } = require("@supabase/supabase-js");
require('dotenv').config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => res.send("SmartMenu API is running"));

app.get("/get-menu", async (req, res) => {
  const { data, error } = await supabase
    .from('Menu')
    .select('id,image, Name, Price');

  if (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching menu items' });
  } else {
    res.json(data);
  }
});


app.listen(port, () =>
  console.log(
    `Server is running on port ${port}...`
  )
);