// api/projects.js

export default function handler(req, res) {
  const projects = [
    {
      title: 'Website Es Kimo',
      description: 'Website profil untuk usaha es kristal, menampilkan layanan, kontak, dan lokasi.',
      tech: ['Vue.js', 'Tailwind CSS', 'Vite'],
      image: 'eskimo',
      link: 'https://es-kimo.vercel.app'
    },
    {
      title: 'Aplikasi Rental Motor',
      description: 'Sistem pemesanan dan pengelolaan rental motor secara online.',
      tech: ['Vue.js', 'Firebase', 'Pinia'],
      image: 'rental',
      link: 'https://rental-motor.vercel.app'
    }
  ]

  res.status(200).json(projects)
}
