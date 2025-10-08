# Simple Admin System Documentation

## Overview
This is a simple admin authentication system that uses Supabase for credential storage and validation.

## Setup

### 1. Database Setup
Run the following SQL in your Supabase SQL editor:

```sql
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
```

**Important Note**: Row Level Security (RLS) is disabled for the `admins` table to allow the anon key to authenticate. In production, consider using service keys or implementing proper RLS policies.

### 2. No Additional Environment Variables Needed
The system uses your existing Supabase configuration.

## Usage

### Admin Login
- Navigate to `/admin/login`
- Use credentials: `admin@ctf.local` / `admin123`
- After successful login, you'll be redirected to `/admin`

### Admin Dashboard Features

#### Simple Dashboard Layout
- **Welcome Message**: Personalized admin greeting
- **System Status Cards**: Basic system information placeholders
- **Quick Actions**: Buttons for common admin tasks (currently placeholders)
- **Protected Access**: Automatic redirect to login if not authenticated

#### Authentication Flow
1. User visits `/admin`
2. System checks `localStorage.getItem('isAdmin')`
3. If not authenticated, redirects to `/admin/login`
4. Login form validates against `admins` table in Supabase
5. On success, sets `isAdmin` flag and redirects to dashboard
6. Logout removes the flag and redirects to login

## Security Notes

- **Simple Authentication**: Uses direct email/password matching (not recommended for production)
- **Session Management**: Uses localStorage for session persistence
- **No Password Hashing**: Plain text passwords (implement bcrypt in production)
- **Single Admin Account**: Only supports one admin account currently
- **RLS Disabled**: Row Level Security is disabled on the admins table for anon key access

## Production Considerations

1. **Password Hashing**: Implement proper password hashing (bcrypt)
2. **Rate Limiting**: Add login attempt limiting
3. **Multiple Admins**: Extend to support multiple admin accounts
4. **JWT Tokens**: Replace localStorage with proper JWT session management
5. **Input Validation**: Add proper email and password validation
6. **Error Handling**: Improve error messages and logging
7. **RLS Policies**: Re-enable RLS with proper policies for production security

## File Structure

```
app/
├── admin/
│   ├── login/
│   │   └── page.tsx    # Simple admin login form
│   └── page.tsx        # Protected admin dashboard
└── admin_setup.sql     # Database setup script
```

## Production Considerations

1. **Password Hashing**: Implement proper password hashing (bcrypt)
2. **Rate Limiting**: Add login attempt limiting
3. **Multiple Admins**: Extend to support multiple admin accounts
4. **JWT Tokens**: Replace localStorage with proper JWT session management
5. **Input Validation**: Add proper email and password validation
6. **Error Handling**: Improve error messages and logging

## Development Notes

- The system uses Supabase's anon key for all operations
- Authentication is table-based using the `admins` table
- Dashboard is minimal with placeholder content for future expansion
- All operations are performed client-side for simplicity
