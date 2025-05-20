
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uacvcdjcjgsueajnjjuo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhY3ZjZGpjamdzdWVham5qanVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzQ0MzYsImV4cCI6MjA2MzMxMDQzNn0.1jH_Z6eljraI2Gn3zciQ76MEJnxSBCQMGzlNMEofZUg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
