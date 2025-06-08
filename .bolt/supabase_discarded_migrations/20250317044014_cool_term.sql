/*
  # Charity Features Enhancement

  1. New Tables
    - `charity_profiles`
      - Organization details and registration info
    - `charity_campaigns`
      - Fundraising campaign management
    - `charity_impact`
      - Impact metrics tracking

  2. Security
    - Enable RLS on all tables
    - Add policies for charity data access
*/

-- Charity profiles
CREATE TABLE IF NOT EXISTS charity_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id),
  organization_name text NOT NULL,
  registration_number text NOT NULL,
  mission_statement text,
  website text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Fundraising campaigns
CREATE TABLE IF NOT EXISTS charity_campaigns (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  charity_profile_id uuid REFERENCES charity_profiles(id),
  title text NOT NULL,
  description text,
  goal_amount decimal NOT NULL,
  current_amount decimal DEFAULT 0,
  start_date date NOT NULL,
  end_date date,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Impact tracking
CREATE TABLE IF NOT EXISTS charity_impact (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  charity_profile_id uuid REFERENCES charity_profiles(id),
  metric_name text NOT NULL,
  metric_value numeric NOT NULL,
  measurement_date date NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE charity_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE charity_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE charity_impact ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Charities can manage their profiles"
  ON charity_profiles
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = profile_id
  ));

CREATE POLICY "Charities can manage their campaigns"
  ON charity_campaigns
  FOR ALL
  USING (auth.uid() IN (
    SELECT p.user_id FROM profiles p
    JOIN charity_profiles c ON c.profile_id = p.id
    WHERE c.id = charity_profile_id
  ));

CREATE POLICY "Charities can manage their impact metrics"
  ON charity_impact
  FOR ALL
  USING (auth.uid() IN (
    SELECT p.user_id FROM profiles p
    JOIN charity_profiles c ON c.profile_id = p.id
    WHERE c.id = charity_profile_id
  ));