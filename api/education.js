// api/education.js

export default function handler(req, res) {
  const educationHistory = [
    {
      id: 1,
      institution: 'Universitas Amikom Yogyakarta',
      major: 'Teknik Informatika',
      period: '2021 - Sekarang'
    },
    {
      id: 2,
      institution: 'SMK Negeri 1 Cibinong',
      major: 'Rekayasa Perangkat Lunak',
      period: '2018 - 2021'
    }
  ]

  res.status(200).json(educationHistory)
}
