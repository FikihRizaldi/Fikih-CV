// api/skills.js

export default function handler(req, res) {
  const skills = [
    {
      name: 'Vue.js',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
    },
    {
      name: 'JavaScript',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'MySQL',
      level: 'Dasar',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'Git',
      level: 'Dasar',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    }
  ]

  res.status(200).json(skills)
}
