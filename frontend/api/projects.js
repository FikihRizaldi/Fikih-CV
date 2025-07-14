// file: api/projects.js
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    const { rows } = await sql`SELECT * FROM projects ORDER BY id`;
    res.status(200).json(rows);
  } catch (e) {
    console.error('DB error:', e);
    res.status(500).json({ error: 'Gagal mengambil data' });
  }
}
