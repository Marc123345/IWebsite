/*
  # iLight Illuminators Campaign Database Schema
  
  ## Overview
  Creates tables to store data from the three-part Illuminator & RAI Campaign:
  1. Resource recommendations
  2. Personal stories and testimonials
  3. Participation/volunteer interest
  
  ## New Tables
  
  ### `illuminator_recommendations`
  Stores external ideas and resources for vetting
  - `id` (uuid, primary key)
  - `recommender_name` (text, optional)
  - `recommender_email` (text, optional)
  - `category` (text, required) - Type of recommendation
  - `resource_name` (text, required)
  - `resource_link` (text, required)
  - `justification` (text, required)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `illuminator_stories`
  Captures testimonials and recruitment assets
  - `id` (uuid, primary key)
  - `full_name` (text, optional)
  - `email` (text, optional)
  - `story_type` (text, required)
  - `story_submission` (text, required)
  - `video_url` (text, optional) - URL to uploaded video
  - `media_consent` (boolean, required)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### `illuminator_participation`
  Collects volunteer/service interest
  - `id` (uuid, primary key)
  - `full_name` (text, required)
  - `email` (text, required)
  - `phone_number` (text, optional)
  - `areas_of_interest` (text[], required) - Array of selected options
  - `other_interest` (text, optional) - Custom interest if "Other" selected
  - `time_commitment` (text, required)
  - `skills_notes` (text, optional)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ## Security
  - Enable RLS on all tables
  - Allow public inserts (for form submissions)
  - Only authenticated admins can read submissions
*/

-- Create illuminator_recommendations table
CREATE TABLE IF NOT EXISTS illuminator_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recommender_name text,
  recommender_email text,
  category text NOT NULL CHECK (category IN ('Proven Wellness Practice', 'Digital Resource', 'Vetted Provider/Clinic', 'Community Program', 'Products', 'Services', 'Acts of kindness / illumination')),
  resource_name text NOT NULL,
  resource_link text NOT NULL,
  justification text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create illuminator_stories table
CREATE TABLE IF NOT EXISTS illuminator_stories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text,
  email text,
  story_type text NOT NULL CHECK (story_type IN ('Personal Testimonial', 'Impact Story', 'The Why (Recruitment)')),
  story_submission text NOT NULL,
  video_url text,
  media_consent boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create illuminator_participation table
CREATE TABLE IF NOT EXISTS illuminator_participation (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone_number text,
  areas_of_interest text[] NOT NULL,
  other_interest text,
  time_commitment text NOT NULL CHECK (time_commitment IN ('Low (1-2 hrs/month)', 'Medium (5 hrs/month)', 'High (10+ hrs/month)', 'Flexible')),
  skills_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE illuminator_recommendations ENABLE ROW LEVEL SECURITY;
ALTER TABLE illuminator_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE illuminator_participation ENABLE ROW LEVEL SECURITY;

-- Create policies for illuminator_recommendations
CREATE POLICY "Allow public insert for recommendations"
  ON illuminator_recommendations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read recommendations"
  ON illuminator_recommendations
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for illuminator_stories
CREATE POLICY "Allow public insert for stories"
  ON illuminator_stories
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read stories"
  ON illuminator_stories
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for illuminator_participation
CREATE POLICY "Allow public insert for participation"
  ON illuminator_participation
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read participation"
  ON illuminator_participation
  FOR SELECT
  TO authenticated
  USING (true);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers for updated_at
DROP TRIGGER IF EXISTS update_illuminator_recommendations_updated_at ON illuminator_recommendations;
CREATE TRIGGER update_illuminator_recommendations_updated_at
  BEFORE UPDATE ON illuminator_recommendations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_illuminator_stories_updated_at ON illuminator_stories;
CREATE TRIGGER update_illuminator_stories_updated_at
  BEFORE UPDATE ON illuminator_stories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_illuminator_participation_updated_at ON illuminator_participation;
CREATE TRIGGER update_illuminator_participation_updated_at
  BEFORE UPDATE ON illuminator_participation
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();