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

app.listen(port, () =>
  console.log(
    `Server is running on port ${port}...`
  )
);