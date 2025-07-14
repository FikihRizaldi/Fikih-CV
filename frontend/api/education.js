// api/education.js
import { sql } from '@vercel/postgres'

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT * FROM education`
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('Error mengambil data education:', error)
    res.status(500).json({ error: 'Gagal mengambil data education' })
  }
}
