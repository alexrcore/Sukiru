import { Tool } from '../domain/tool.ts'

type ToolKey = (typeof tools)[number]

export const tools = [
  // Programming Language
  'JavaScript',
  'TypeScript',
  'Go',
  'Python',
  'Java',
  'C',
  'C++',
  'C#',
  'Dart',
  'Bash',
  'PHP',
  'Ruby',
  'Swift',
  'SQL',
  'Rust',
  'Kotlin',
  'Scala',
  'Perl',
  'Lua',
  'Haskell',

  // Backend Framework
  'Express',
  'Nest',
  'Django',
  'Flask',
  'Laravel',
  'Spring Boot',
  'Spring',
  '.NET',
  'FastAPI',

  // Frontend Framework
  'React',
  'Vue',
  'Next',
  'Angular',
  'Remix',
  'Svelte',
  'Solid',

  // Mobile Frameworks
  'Flutter',
  'React Native',

  // Desktop Framework
  'Tauri',
  'Electron',

  // UI Library
  'ShadCN',
  'Radix',
  'Framer',
  'GSAP',
  'Bootstrap',
  'Tailwind',
  'Chakra UI',
  'Material UI',
  'Emotion',

  // State Management
  'Redux',
  'Zustand',
  'React Query',

  // Database
  'MongoDB',
  'PostgreSQL',
  'MySQL',
  'SQLite',
  'Oracle',
  'SQL Server',
  'Redis',
  'MariaDB',
  'Cassandra',
  'DynamoDB',
  'Neo4j',
  'Supabase',
  'S3',
  'Cloudinary',

  // Architecture
  'MVC',
  'DDD',
  'Microservices',
  'OOP',
  'RESTful',
  'ACID',
  'SOLID',
  'Hexagonal Architecture',
  'Event Driven Architecture',
  'MCP',
  'MVVC',

  // DevOps
  'Git',
  'Docker',
  'Kubernetes',
  'Github Actions',
  'Jenkins',
  'Terraform',
  'GitLab',
  'NGINX',
  'ArgoCD',
  'Prometheus',
  'Vite',
  'Webpack',

  // Cloud Platform
  'AWS',
  'Google Cloud',
  'Azure',
  'Vercel',
  'Netlify',
  'Firebase',
  'Cloudflare',
  'Heroku',
  'Digital Ocean',
  'Render',

  // Protocol
  'HTTP',
  'WebSockets',
  'gRPC',
  'Thrift',
  'GraphQL',
  'WebRTC',
  'tRPC',
  'QUIC',

  // Message broker
  'RabbitMQ',
  'Kafka',
  'PubSub',

  // Security
  'JWTs',
  'OAuth',
  'bcrypt',
  'CORS',
  'Helmet',

  // Markup Language
  'HTML',

  // Style Language
  'CSS',

  // Utility
  'Prisma',
  'Swagger',
  'Zod',
  'Jest',
  'Vitest',
  'UUID',
] as const

export const Tools = Object.fromEntries(tools.map(name => [name, new Tool(name)])) as Record<ToolKey, Tool>
export const isTool = (key: string): key is ToolKey => tools.includes(key as ToolKey)
