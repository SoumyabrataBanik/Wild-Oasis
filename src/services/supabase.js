import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jvldkhevrbkaedpjnady.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2bGRraGV2cmJrYWVkcGpuYWR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NDY1OTMsImV4cCI6MjAyMTQyMjU5M30.vBFvRixqX0rskfoGIvfCE1yX02M9tQnNiK7fCAQifCM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;