/*
  # Provider Features Enhancement

  1. New Tables
    - `provider_sessions`
      - Track therapy sessions and notes
    - `provider_availability`
      - Manage scheduling and availability
    - `provider_resources`
      - Share resources with clients

  2. Security
    - Enable RLS on all tables
    - Add policies for provider data access
*/

-- Session management
CREATE TABLE IF NOT EXISTS provider_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES profiles(id),
  participant_id uuid REFERENCES profiles(id),
  session_date timestamptz NOT NULL,
  session_type text NOT NULL,
  notes text,
  status text DEFAULT 'scheduled',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Provider availability
CREATE TABLE IF NOT EXISTS provider_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES profiles(id),
  day_of_week integer NOT NULL,
  start_time time NOT NULL,
  end_time time NOT NULL,
  is_available boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Provider resources
CREATE TABLE IF NOT EXISTS provider_resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider_id uuid REFERENCES profiles(id),
  title text NOT NULL,
  description text,
  resource_type text NOT NULL,
  content text NOT NULL,
  is_public boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE provider_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE provider_resources ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Providers can manage their sessions"
  ON provider_sessions
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = provider_id
  ));

CREATE POLICY "Providers can manage their availability"
  ON provider_availability
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = provider_id
  ));

CREATE POLICY "Providers can manage their resources"
  ON provider_resources
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = provider_id
  ));