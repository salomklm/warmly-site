/*
  # Create stock_alerts table

  1. New Tables
    - `stock_alerts`
      - `id` (uuid, primary key) - Unique identifier
      - `email` (text, not null) - Customer email address
      - `size` (text, not null) - Requested size (XS, S, M, L, XL)
      - `status` (text, default 'new') - Alert status (new, notified, cancelled)
      - `created_at` (timestamptz, default now()) - Timestamp of request

  2. Security
    - Enable RLS on `stock_alerts` table
    - Add policy for public to insert their own alerts
    - Add policy for authenticated admins to view all alerts

  3. Purpose
    This table stores customer requests to be notified when out-of-stock sizes become available.
*/

CREATE TABLE IF NOT EXISTS stock_alerts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  size text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE stock_alerts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their own stock alert
CREATE POLICY "Anyone can create stock alerts"
  ON stock_alerts
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to view all alerts (for admin dashboard)
CREATE POLICY "Authenticated users can view all alerts"
  ON stock_alerts
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries by status
CREATE INDEX IF NOT EXISTS idx_stock_alerts_status ON stock_alerts(status);

-- Create index for faster queries by size
CREATE INDEX IF NOT EXISTS idx_stock_alerts_size ON stock_alerts(size);

-- Create index for faster queries by created_at
CREATE INDEX IF NOT EXISTS idx_stock_alerts_created_at ON stock_alerts(created_at DESC);