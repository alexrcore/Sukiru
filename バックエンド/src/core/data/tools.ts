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
  'Node',
  'Express',
  'Nest',
  'Django',
  'Flask',
  'Laravel',
  'Spring Boot',
  'Spring',
  '.Net',
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
  'Redux',
  'Chakra UI',
  'Material UI',
  'Emotion',

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

  // Protocol
  'HTTP',
  'WebSockets',
  'gRPC',
  'Thrift',
  'GraphQL',
  'gRPC',
  'WebRTC',
  'tRPC',
  'QUIC',

  // Message broker
  'RabbitMQ',
  'Kafka',
  'Google PubSub',

  // Authentication
  'JWTs',
  'OAuth',

  // Markup Language
  'HTML',

  // Style Language
  'CSS',
  'Tailwind',

  // Utility
  'Prisma',
  'Swagger',
  'Zod',
  'Jest',
  'Vitest',
] as const

export const Tools = Object.fromEntries(tools.map(name => [name.replace(/\s|\+|\./g, '_'), new Tool(name)])) as Record<ToolKey, Tool>
export const isTool = (key: string): key is ToolKey => tools.includes(key as ToolKey)
