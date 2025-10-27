import { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'
import SkillSection from '../../components/SkillSection/SkillSection'
import { getTools } from '../../api/tools'

import './MainLayout.css'

const ALL_SKILLS = [
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Git',
  'Tailwind',
  'Java',
  'ExpressJS',
  'ReactJS',
  'PHP',
  'Python',
  'SQL',
  'Docker',
  'Google Cloud',
  'GitHub Actions',
  'MongoDB',
  'NestJS',
  'C#',
  'Kotlin',
  'AWS',
  'Kubernetes',
  'Django',
  'Prisma',
  'NextJS',
  'Unity',
  'AngularJS',
  'OOP',
  'DDD',
  'Flutter',
  'TypeScript',
  'Sass',
  'Less',
  'Redux',
  'Vue.js',
  'Nuxt.js',
  'Bootstrap',
  'Material UI',
  'Jest',
  'Mocha',
  'Chai',
  'C++',
  'C',
  'Go',
  'Rust',
  'Ruby',
  'Rails',
  'Laravel',
  'Spring Boot',
  'Firebase',
  'Azure',
  'Heroku',
  'Netlify',
  'Vercel',
  'GraphQL',
  'Apollo',
  'REST API',
  'WebSockets',
  'Webpack',
  'Parcel',
  'Vite',
  'ESLint',
  'Prettier',
  'Jenkins',
  'Travis CI',
  'CircleCI',
  'Figma',
  'Adobe XD',
  'Photoshop',
  'Illustrator',
  'Agile',
  'Scrum',
  'Kanban',
  'TDD',
  'CI/CD',
  'Microservices',
  'SOLID',
  'Design Patterns',
  'Algorithms',
  'Data Structures',
  'Linux',
  'Bash',
  'Shell Scripting',
  'Pandas',
  'NumPy',
  'TensorFlow',
  'PyTorch',
  'Machine Learning',
  'AI',
  'Data Science',
  'BigQuery',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'NoSQL',
  'Redis',
  'RabbitMQ',
  'Kafka',
  'Elasticsearch',
  'JIRA',
  'Confluence',
  'Slack',
  'Notion',
  'Markdown',
  'JSON',
  'YAML',
  'XML',
]

const MainLayout = () => {
  const [selectedSkills, setSelectedSkills] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const tools = await getTools()
        setSkills(tools)
      } catch (err) {
        console.error('Failed to fetch tools:', err)
      }
    }
    fetchSkills()
  }, [])

  const toggleSkill = skill => {
    setSelectedSkills(prev => (prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]))
  }

  const filteredSkills = skills.filter(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="main-layout">
      <Sidebar selectedSkills={selectedSkills} toggleSkill={toggleSkill} />
      <div className="main-layout-body">
        <Header />
        <main className="main-content">
          <SkillSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            skills={filteredSkills}
            selectedSkills={selectedSkills}
            onToggleSkill={toggleSkill}
          />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
