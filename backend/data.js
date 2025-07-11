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
    name: 'CodeIgniter',
    level: 'Menengah',
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg'
  },
 {
  name: 'MySQL',
  level: 'Menengah',
  iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
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

const projects = [
  {
    title: 'Website Profile Company Es Kimo',
    image: 'eskimo', // ambil dari imageMap
    description: 'Platform profile perusahaan supplier es kristal',
    tech: ['CodeIgniter', 'Bootstrap', 'MySQL'],
    link: 'https://github.com/bagoongyoo/Final-Project-Web.git'
  },
  {
    title: 'Aplikasi Rental Motor',
    image: 'rental', // ambil dari imageMap
    description: 'Aplikasi Untuk Rental Motor',
    tech: ['C#'],
    link: 'https://github.com/FikihRizaldi/Sewa_motor.git'
  }
];


module.exports = { educationHistory, skills, projects };