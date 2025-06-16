import { Role } from '@/core/domain/role.ts'
import { skills } from './skills.ts'

const values = [
  new Role('Junior Backend', [
    skills.HTML,
    skills.CSS,
    skills.Javascript,
    skills.NodeJS,
    skills.ExpressJS,
    skills.SQL,
    skills.PostgreSQL,
    skills.MongoDB,
    skills.Git,
  ]),
  new Role('Sunior Backend', [
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
  ]),
]

export const roles = () => values.map(role => new Role(role.label, role.requirements))
export const countRequirements = (label: string) => values.find(value => value.label === label)!.requirements.size
