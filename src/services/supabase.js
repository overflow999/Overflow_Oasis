import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zaogzhjryjsaeqrkvlfc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inphb2d6aGpyeWpzYWVxcmt2bGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwNDQ0MjgsImV4cCI6MjA0NTYyMDQyOH0.0EiwmtQbvfB-2bjV3RXYFzWh4oiMW7LSkQvwv7nXLdw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
