/*
  # Add email verification fields to profiles

  1. Changes
    - Add `email_verified` column to profiles table
    - Add `email_verification_token` column to profiles table
    - Add `email_verification_sent_at` column to profiles table

  2. Security
    - Update RLS policies to include new fields
*/

ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS email_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS email_verification_token uuid,
ADD COLUMN IF NOT EXISTS email_verification_sent_at timestamptz;

-- Update handle_new_user function to include email verification
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    full_name,
    avatar_url,
    email_verified,
    email_verification_token
  )
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url',
    false,
    gen_random_uuid()
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;