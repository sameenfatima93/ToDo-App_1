import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
let supabaseURL = 'https://wubvtpswfssmrmeywksg.supabase.co'
let supabaseKEY='sb_publishable_Hdwc0PpEAZsPhTfUFoJgLA_vjbAztGL'
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseURL,supabaseKEY)

export default supabase