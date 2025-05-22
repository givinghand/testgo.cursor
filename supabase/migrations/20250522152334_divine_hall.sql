/*
  # Create user test results table

  1. New Tables
    - `user_test_results`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `test_name` (text)
      - `exam_id` (text)
      - `subject_id` (text)
      - `topic_id` (text)
      - `sub_exam_id` (text)
      - `score` (integer)
      - `total_questions` (integer)
      - `time_taken` (integer)
      - `answers` (jsonb)
      - `taken_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `user_test_results` table
    - Add policies for authenticated users to:
      - Insert their own test results
      - Read their own test results
*/

CREATE TABLE IF NOT EXISTS public.user_test_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  test_name text NOT NULL,
  exam_id text NOT NULL,
  subject_id text,
  topic_id text,
  sub_exam_id text,
  score integer NOT NULL,
  total_questions integer NOT NULL,
  time_taken integer NOT NULL,
  answers jsonb NOT NULL,
  taken_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.user_test_results ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can insert their own test results"
  ON public.user_test_results
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read their own test results"
  ON public.user_test_results
  FOR SELECT
  USING (auth.uid() = user_id);