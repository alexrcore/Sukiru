import { skills } from '@/core/data/skills.ts'
import { Role } from '@/core/domain/role.ts'

const values = [
  new Role('Junior Backend', [
    skills.JavaScript,

    skills.Express,

    skills.PostgreSQL,
    skills.MongoDB,
    skills.Firebase,

    skills.Github_Actions,

    skills.JWTs,
    skills.OAuth,
    skills.Prisma,
    skills.Swagger,
    skills.Zod,
    skills.Jest,
    skills.Vitest,

    skills.HTTP,
    skills.Websockets,

    skills.OOP,
    skills.MVC,
    skills.RESTful,

    skills.HTML,
    skills.Git,
    skills.NodeJS,
    skills.SQL,
    skills.Linux,
  ]),

  new Role('Sunior Backend', [
    skills.JavaScript,
    skills.TypeScript,

    skills.Express,
    skills.Next,
    skills.Nest,

    skills.PostgreSQL,
    skills.MySQL,
    skills.SQL_Server,
    skills.Redis,
    skills.SQL,
    skills.MongoDB,
    skills.Firebase,

    skills.Docker,
    skills.AWS,
    skills.Kubernetes,
    skills.Jenkins,
    skills.Terraform,
    skills.Google_Cloud,
    skills.Github_Actions,
    skills.GitLab,
    skills.NGINX,

    skills.JWTs,
    skills.OAuth,
    skills.Auth0,
    skills.Prisma,
    skills.Swagger,
    skills.Zod,
    skills.Jest,
    skills.Vitest,

    skills.HTTP,
    skills.Websockets,
    skills.gRPC,
    skills.Google_PubSub,
    skills.GraphQL,
    skills.WebRTC,
    skills.SSE,
    skills.FCM,

    skills.OOP,
    skills.DDD,
    skills.Microservices,
    skills.SOLID,
    skills.MVC,
    skills.RESTful,
    skills.Hexagonal_Architecture,
    skills.Event_Driven_Architecture,
    skills.MCP,
    skills.ACID,

    skills.HTML,
    skills.Git,
    skills.NodeJS,
    skills.SQL,
    skills.Linux,
  ]),

  new Role('Junior Frontend', [
    skills.JavaScript,

    skills.React,
    skills.Express,

    skills.PostgreSQL,
    skills.MongoDB,
    skills.Firebase,

    skills.Github_Actions,
    skills.Vercel,
    skills.Heroku,
    skills.Netlify,

    skills.Tailwind,
    skills.ShadCN,
    skills.Material_UI,
    skills.Redux,
    skills.Vite,

    skills.JWTs,
    skills.OAuth,
    skills.Zod,

    skills.HTTP,
    skills.Websockets,

    skills.OOP,
    skills.MVC,

    skills.HTML,
    skills.CSS,
    skills.NodeJS,
    skills.Git,
  ]),

  new Role('Senior Frontend', [
    skills.JavaScript,
    skills.TypeScript,

    skills.React,
    skills.Express,
    skills.Next,
    skills.React_Native,
    skills.jQuery,

    skills.PostgreSQL,
    skills.MongoDB,
    skills.Firebase,

    skills.Docker,
    skills.GitLab,
    skills.Cloudflare,
    skills.Github_Actions,
    skills.Vercel,
    skills.Heroku,
    skills.Netlify,
    skills.NGINX,

    skills.Tailwind,
    skills.ShadCN,
    skills.Redux,
    skills.Vite,
    skills.Chakra_UI,
    skills.Material_UI,
    skills.Radix_UI,
    skills.Emotion,
    skills.SWR,

    skills.JWTs,
    skills.OAuth,
    skills.Zod,
    skills.Vitest,
    skills.HTMX,

    skills.HTTP,
    skills.Websockets,
    skills.WebRTC,

    skills.OOP,
    skills.MVC,
    skills.SOLID,

    skills.HTML,
    skills.CSS,
    skills.NodeJS,
    skills.Git,
    skills.Linux,
  ]),
]

export const roles = () => values.map(role => new Role(role.label, role.requirements))
export const countRequirements = (label: string) => values.find(value => value.label === label)!.requirements.size
