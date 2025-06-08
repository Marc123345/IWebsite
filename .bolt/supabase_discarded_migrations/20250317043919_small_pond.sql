/*
  # Participant Features Enhancement

  1. New Tables
    - `participant_goals`
      - Track personal goals and progress
    - `participant_journals`
      - Daily mood and reflection tracking
    - `participant_support_network`
      - Connect with family and care providers

  2. Security
    - Enable RLS on all tables
    - Add policies for participant data access
*/

-- Goals tracking
CREATE TABLE IF NOT EXISTS participant_goals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id uuid REFERENCES profiles(id),
  title text NOT NULL,
  description text,
  target_date date,
  status text DEFAULT 'in_progress',
  progress integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Journal entries
CREATE TABLE IF NOT EXISTS participant_journals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id uuid REFERENCES profiles(id),
  mood_rating integer,
  entry_text text,
  tags text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Support network
CREATE TABLE IF NOT EXISTS participant_support_network (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  participant_id uuid REFERENCES profiles(id),
  supporter_id uuid REFERENCES profiles(id),
  relationship_type text NOT NULL,
  access_level text DEFAULT 'basic',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE participant_goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE participant_journals ENABLE ROW LEVEL SECURITY;
ALTER TABLE participant_support_network ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can manage their own goals"
  ON participant_goals
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = participant_id
  ));

CREATE POLICY "Users can manage their own journals"
  ON participant_journals
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = participant_id
  ));

CREATE POLICY "Users can manage their support network"
  ON participant_support_network
  FOR ALL
  USING (auth.uid() IN (
    SELECT user_id FROM profiles WHERE id = participant_id
  ));