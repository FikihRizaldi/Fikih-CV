import { sql } from '@vercel/postgres'

export default async function handler(req, res) {
  try {
    const result = await sql`SELECT * FROM skills`
    
    // Konversi key snake_case -> camelCase
    const skills = result.rows.map(skill => ({
      name: skill.name,
      level: skill.level,
      iconUrl: skill.icon_url // ubah ke camelCase agar cocok dengan Vue
    }))

    res.status(200).json(skills)
  } catch (error) {
    console.error('Error mengambil data skills:', error)
    res.status(500).json({ error: 'Gagal mengambil data skills' })
  }
}
