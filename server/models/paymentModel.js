import { createClient } from '@supabase/supabase-js'
import {config} from 'dotenv'
const supabase = createClient("https://iyqseegwbrpxxquicvsp.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5cXNlZWd3YnJweHhxdWljdnNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODMwNzAsImV4cCI6MjAzMDA1OTA3MH0.FDCI2wvEqF14USLIlSAgV165GOoWi0etPa3kyTDpa1g")

const insert = async () => {
  const { data, error } = await supabase
  .from('countries')
  .insert([
    { id: 1, name: 'Denmark' },
    { id: 2, name: 'Sweden' }
  ])
}

// const paymentSchema = new mongoose.Schema({
//   razorpay_order_id: {
//     type: String,
//     required: true,
//   },
//   razorpay_payment_id: {
//     type: String,
//     required: true,
//   },
//   razorpay_signature: {
//     type: String,
//     required: true,
//   },
// });

export const Payment = insert();
