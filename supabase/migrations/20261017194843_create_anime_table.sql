/*
# Create anime table for the "Forget about reality" page

1. New Tables
- `anime` — ranked anime entries shown as poster cards on the Forget page.
  - `id` (uuid, primary key)
  - `rank` (integer, not null, unique) — position 1..10 in the leaderboard
  - `title` (text, not null) — display title, e.g. "Attack on Titan"
  - `slug` (text, not null, unique) — lowercase hyphenated key, e.g. "attack-on-titan"
  - `image` (text, not null) — poster path/URL under /anime/
  - `paragraphs` (jsonb, not null, default '[]') — array of note paragraphs shown when a card is clicked
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `anime`.
- Add anon + authenticated SELECT policy: this is a public, single-tenant portfolio page with no sign-in, so reads are intentionally open. No write policies — content is managed by the owner only.
3. Notes
- Idempotent: safe to re-run. */
CREATE TABLE IF NOT EXISTS anime (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  rank integer NOT NULL UNIQUE,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  image text NOT NULL,
  paragraphs jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE anime ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_anime" ON anime;

CREATE POLICY "public_read_anime" ON anime
FOR SELECT
TO anon, authenticated
USING (true);
