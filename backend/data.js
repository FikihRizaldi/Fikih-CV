// backend/data.js
const educationHistory = [ 
  { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
  { id: 2, period: '2019 - 2022', institution: 'SMA Walisongo Karangmalang', major: 'MIPA' }
];

const skills = [
  {
    name: 'Vue.js',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
  },
  {
    name: 'JavaScript',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
  "name": "Tailwind CSS",
  "level": "Mahir",
  "iconUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
  },
  {
    name: 'Node.js',
    level: 'Menengah',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'Express.js',
    level: 'Menengah',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  {
    name: 'PostgreSQL',
    level: 'Menengah',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'Git & GitHub',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'HTML5 & CSS3',
    level: 'Mahir',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  }
];

const projects = [ { title: 'Website Profile Company Es Kimo', image:
'https://via.placeholder.com/500x300?text=Proyek+1', description:
'Platform profile perusahaan supplier es kristal', tech: ['Vue.js',
'Express.js', 'PostgreSQL'], link: '#' },
{ title: 'Aplikasi Manajemen Tugas', image:
'https://via.placeholder.com/500x300?text=Proyek+2', description:
'Aplikasi untuk melacak progres tugas harian.', tech: ['React',
'Firebase'], link: '#' }];
module.exports = { educationHistory, skills, projects };