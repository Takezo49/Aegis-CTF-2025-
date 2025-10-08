-- Drop existing admin table if it exists (to avoid conflicts)
DROP TABLE IF EXISTS public.admins;

-- Create admin table for storing admin credentials
CREATE TABLE public.admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin (email: admin@ctf.local, password: admin123)
INSERT INTO public.admins (username, password_hash, email)
VALUES ('admin', 'admin123', 'admin@ctf.local');

-- Disable Row Level Security for admins table (allows anon key access)
ALTER TABLE public.admins DISABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT ON public.admins TO anon;
GRANT INSERT ON public.admins TO anon;
GRANT UPDATE ON public.admins TO anon;
GRANT DELETE ON public.admins TO anon;
