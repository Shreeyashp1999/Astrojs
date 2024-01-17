import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iezaviyrcmvhppudbejv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllemF2aXlyY212aHBwdWRiZWp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUyMTcxMTcsImV4cCI6MjAyMDc5MzExN30.2668ne0zng5kcPxf40rUk9TAU8a1oQa5GrddEEy_0z4";
export const supabase = createClient(supabaseUrl, supabaseKey);