import { Role } from '@/core/domain/role.ts'
import { Skill } from '@/core/domain/skill.ts'
import { skills } from '@/data/skills.ts'

export const roles: Role[] = [
  new Role(
    'Junior Backend',
    new Set<Skill>([skills.HTML, skills.CSS, skills.Javascript, skills.NodeJS, skills.ExpressJS, skills.SQL, skills.PostgreSQL, skills.MongoDB, skills.Git])
  ),
  new Role(
    'Sunior Backend',
    new Set<Skill>([
      skills.HTML,
      skills.CSS,
      skills.Javascript,
      skills.Typescript,
      skills.NodeJS,
      skills.ExpressJS,
      skills.NestJS,
      skills.SQL,
      skills.PostgreSQL,
      skills.MongoDB,
      skills.Git,
      skills.Docker,
      skills.Kubernetes,
      skills.Github_Actions,
      skills.Google_Cloud,
    ])
  ),
]
