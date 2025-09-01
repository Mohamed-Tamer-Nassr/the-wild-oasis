import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wrzdyovelblpkxjkevrv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyemR5b3ZlbGJscGt4amtldnJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MzcyNzQsImV4cCI6MjA3MjExMzI3NH0.ecx0nb8ZS0_KPWzkSeQfizXs-xET-F6JIYyRoSJT-dE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
