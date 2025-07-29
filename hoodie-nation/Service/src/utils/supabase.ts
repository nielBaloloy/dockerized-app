import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vkliaijzdlrwxmztqnoj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbGlhaWp6ZGxyd3htenRxbm9qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NjcxNzAsImV4cCI6MjA2OTI0MzE3MH0.WkFuAeob50PZGaga41fWWJD0rxl4fmxKB8pGaCLYQXQ'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
