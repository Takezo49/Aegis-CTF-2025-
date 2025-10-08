# Admin System Documentation

## Overview
This is a simple admin authentication and management system for the CTF platform.

## Setup

### 1. Database Setup
Run the following SQL in your Supabase SQL editor:

```sql
-- Create admin table for storing admin credentials
CREATE TABLE IF NOT EXISTS public.admins (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default admin (username: admin, password: admin123)
INSERT INTO public.admins (username, password_hash, email)
VALUES ('admin', 'admin123', 'admin@ctf-site.com')
ON CONFLICT (username) DO NOTHING;
```

### 2. Environment Variables
No additional environment variables are needed beyond the existing Supabase configuration.

## Usage

### Admin Login
- Navigate to `/admin/login`
- Use credentials: `admin@ctf.local` / `admin123`
- After successful login, you'll be redirected to `/admin`

### Admin Dashboard Features

#### Statistics Cards
- **Total Users**: Shows count of registered players
- **IP Addresses**: Shows count of tracked IP addresses
- **Active Users (24h)**: Shows users active in the last 24 hours

#### IP Address Management
- **View IP Addresses**: Table showing all tracked IP addresses with user associations
- **Quick Update**: Inline editing to update IP addresses directly from the table
- **Real-time Data**: Refresh button to reload current data

#### IP Update Process
1. Enter new IP address in the input field next to any existing IP
2. Click "Update" button or press Enter
3. IP address is updated in the database and timestamp is refreshed
4. Success/error message is displayed

## Security Notes

- Currently uses hardcoded credentials for simplicity
- In production, implement proper password hashing
- Consider adding rate limiting for login attempts
- Add session management for better security

## API Endpoints

The system uses the existing Supabase client for all database operations. No additional API routes are required for basic functionality.

## File Structure

```
app/
├── admin/
│   ├── login/
│   │   └── page.tsx    # Admin login page
│   └── page.tsx        # Admin dashboard
└── api/
    └── ip/
        ├── list/route.ts      # API for listing IP addresses
        └── update/route.ts    # API for updating IP addresses
```

## Development Notes

- The admin system uses the anon key for all operations
- IP address tracking happens automatically when users access the system
- The dashboard provides real-time statistics and management capabilities
- All operations are performed client-side for simplicity
