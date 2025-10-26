import { Area } from '../domain/area.ts'
import { Category } from '../domain/category.ts'
import { Level, LevelName } from '../domain/level.ts'
import { Pool } from '../domain/pool.ts'
import { Role } from '../domain/role.ts'
import { Tools } from './tools.ts'

export const Roles = {
  Backend_Developer: new Role('Backend Developer', [
    new Level(LevelName.Junior, [
      new Area(Category.Backend_Framework, [new Pool(Tools.Express, Tools.Laravel, Tools['Spring Boot'], Tools.Django, Tools.Go)], []),

      new Area(Category.Frontend_Framework, [], [new Pool(Tools.React)]),

      new Area(Category.Database, [new Pool(Tools.PostgreSQL, Tools.MySQL), new Pool(Tools.MongoDB), new Pool(Tools.SQL)], [new Pool(Tools.Redis)]),

      new Area(Category.CSS, [new Pool(Tools.CSS)], [new Pool(Tools.Tailwind)]),

      new Area(Category.HTML, [new Pool(Tools.HTML)], []),

      new Area(Category.Protocol, [new Pool(Tools.HTTP)], [new Pool(Tools.GraphQL), new Pool(Tools.WebSockets)]),

      new Area(Category.DevOps_Tool, [new Pool(Tools.Git)], [new Pool(Tools.Docker)]),

      new Area(Category.Cloud_Platform, [new Pool(Tools.Vercel)], [new Pool(Tools.AWS, Tools['Google Cloud'], Tools.Azure)]),

      new Area(Category.Architecture, [new Pool(Tools.MVC)], [new Pool(Tools.DDD)]),
    ]),

    new Level(LevelName.Intermediate, [
      new Area(Category.Backend_Framework, [new Pool(Tools.Express, Tools.Laravel, Tools['Spring Boot'], Tools.Django, Tools.Go)], []),

      new Area(Category.Frontend_Framework, [], [new Pool(Tools.React)]),

      new Area(Category.Database, [new Pool(Tools.PostgreSQL, Tools.MySQL), new Pool(Tools.MongoDB), new Pool(Tools.SQL), new Pool(Tools.Redis)], []),

      new Area(Category.CSS, [new Pool(Tools.CSS)], [new Pool(Tools.Tailwind)]),

      new Area(Category.HTML, [new Pool(Tools.HTML)], []),

      new Area(Category.Protocol, [new Pool(Tools.HTTP), new Pool(Tools.GraphQL), new Pool(Tools.WebSockets)], [new Pool(Tools.gRPC)]),

      new Area(Category.DevOps_Tool, [new Pool(Tools.Git), new Pool(Tools.Docker)], [new Pool(Tools.Kubernetes)]),

      new Area(Category.Cloud_Platform, [new Pool(Tools.Vercel), new Pool(Tools.AWS, Tools['Google Cloud'], Tools.Azure)], []),

      new Area(Category.Architecture, [new Pool(Tools.MVC), new Pool(Tools.DDD)], [new Pool(Tools.Microservices)]),
    ]),
  ]),

  Frontend_Developer: new Role('Frontend Developer', [
    new Level(LevelName.Junior, [
      new Area(Category.Programming_Language, [new Pool(Tools.JavaScript)], [new Pool(Tools.TypeScript)]),

      new Area(Category.Frontend_Framework, [new Pool(Tools.React)], [new Pool(Tools.Vue, Tools.Next)]),

      new Area(Category.CSS, [new Pool(Tools.CSS), new Pool(Tools.Tailwind)], []),

      new Area(Category.HTML, [new Pool(Tools.HTML)], []),

      new Area(Category.Protocol, [new Pool(Tools.HTTP)], [new Pool(Tools.WebSockets, Tools.GraphQL)]),

      new Area(Category.DevOps_Tool, [new Pool(Tools.Git)], []),

      new Area(Category.Cloud_Platform, [new Pool(Tools.Vercel)], []),

      new Area(Category.UI_Library, [new Pool(Tools.ShadCN, Tools.Radix, Tools.Bootstrap)], [new Pool(Tools.Framer, Tools.GSAP)]),
    ]),
  ]),
}

export const RolesList = Object.values(Roles)
