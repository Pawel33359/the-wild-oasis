import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jxanprnhzlrromuxiuwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4YW5wcm5oemxycm9tdXhpdXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMTg0NDMsImV4cCI6MjA1NDY5NDQ0M30._B14NixVX0cnkeccKy7f3NOWtoowrcF7drHQlvCXCfE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
