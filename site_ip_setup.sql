-- Create site_ip table for storing site configuration
CREATE TABLE IF NOT EXISTS public.site_ip (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default IP address (replace with your actual IP)
INSERT INTO public.site_ip (ip_address)
VALUES ('192.168.1.1')
ON CONFLICT DO NOTHING;

-- Disable Row Level Security for site_ip table (allows anon key access)
ALTER TABLE public.site_ip DISABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT SELECT ON public.site_ip TO anon;
GRANT INSERT ON public.site_ip TO anon;
GRANT UPDATE ON public.site_ip TO anon;
GRANT DELETE ON public.site_ip TO anon;
