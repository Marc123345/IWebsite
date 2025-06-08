/*
  # Contact Form Tables

  1. New Tables
    - `contact_submissions`
      - Base table for all contact form submissions
      - Stores common fields for both member and provider submissions
    - `member_submissions`
      - Additional fields specific to member submissions
    - `provider_submissions`
      - Additional fields specific to provider submissions

  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Base contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  user_type text NOT NULL CHECK (user_type IN ('member', 'provider')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Member-specific submissions
CREATE TABLE IF NOT EXISTS member_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES contact_submissions(id) ON DELETE CASCADE,
  date_of_birth date NOT NULL,
  emergency_contact text NOT NULL,
  preferred_communication text NOT NULL,
  support_needs text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Provider-specific submissions
CREATE TABLE IF NOT EXISTS provider_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  submission_id uuid REFERENCES contact_submissions(id) ON DELETE CASCADE,
  credentials text NOT NULL,
  specialization text NOT NULL,
  experience_years integer NOT NULL,
  license_number text NOT NULL,
  organization text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE member_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid() FROM auth.users 
    WHERE auth.email() IN ('admin@ilight.health')
  ));

-- Policies for member_submissions
CREATE POLICY "Anyone can insert member submissions"
  ON member_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can view member submissions"
  ON member_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid() FROM auth.users 
    WHERE auth.email() IN ('admin@ilight.health')
  ));

-- Policies for provider_submissions
CREATE POLICY "Anyone can insert provider submissions"
  ON provider_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only admins can view provider submissions"
  ON provider_submissions
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid() FROM auth.users 
    WHERE auth.email() IN ('admin@ilight.health')
  ));

-- Add updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_member_submissions_updated_at
  BEFORE UPDATE ON member_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_provider_submissions_updated_at
  BEFORE UPDATE ON provider_submissions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();