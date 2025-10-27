import { MustHaveAll, MustHaveAtLeastOne } from '@/core/domain/pool.ts'
import { Area } from '../domain/area.ts'
import { Category } from '../domain/category.ts'
import { Level, LevelName } from '../domain/level.ts'
import { Role } from '../domain/role.ts'
import { Tools } from './tools.ts'

export const Roles = {
  JavaScript_Kiddy: new Role('JavaScript Kiddy', [
    new Level(LevelName.Junior, [
      new Area(Category.Programming_Languages, new MustHaveAll(Tools.JavaScript), Tools.TypeScript),
      new Area(Category.Frontend_Frameworks, new MustHaveAll(Tools.React)),
    ]),
  ]),

  Backend_Developer: new Role('Backend Developer', [
    new Level(LevelName.Junior, [
      new Area(Category.Backend_Frameworks, new MustHaveAtLeastOne(Tools.Express, Tools.Laravel, Tools['Spring Boot'], Tools.Django, Tools.Go)),

      new Area(Category.Frontend_Frameworks, new MustHaveAll(), Tools.React, Tools.Next),

      new Area(Category.Databases, new MustHaveAll(Tools.SQL, Tools.PostgreSQL, Tools.MongoDB), Tools.MySQL, Tools.Redis, Tools.Firebase),

      new Area(Category.Styles, new MustHaveAll(Tools.HTML, Tools.CSS, Tools.JavaScript)),

      new Area(Category.Protocols, new MustHaveAll(Tools.HTTP, Tools.WebSockets), Tools.GraphQL),

      new Area(Category.DevOps_Tools, new MustHaveAll(Tools.Git), Tools.Docker),

      new Area(Category.Architectures, new MustHaveAll(Tools.MVC, Tools.OOP)),
    ]),

    new Level(LevelName.Intermediate, [
      new Area(Category.Backend_Frameworks, new MustHaveAtLeastOne(Tools.Express, Tools.Laravel, Tools['Spring Boot'], Tools.Django, Tools.Go)),

      new Area(Category.Frontend_Frameworks, new MustHaveAll(Tools.React), Tools.Next),

      new Area(Category.Databases, new MustHaveAll(Tools.SQL, Tools.PostgreSQL, Tools.MongoDB, Tools.Redis, Tools.Firebase), Tools.MySQL),

      new Area(Category.Styles, new MustHaveAll(Tools.HTML, Tools.CSS, Tools.JavaScript)),

      new Area(Category.Protocols, new MustHaveAll(Tools.HTTP, Tools.WebSockets, Tools.GraphQL), Tools.gRPC),

      new Area(Category.DevOps_Tools, new MustHaveAll(Tools.Git, Tools.Docker), Tools.Kubernetes),

      new Area(Category.Cloud_Platforms, new MustHaveAtLeastOne(Tools.AWS, Tools['Google Cloud'], Tools.Azure)),

      new Area(Category.Architectures, new MustHaveAll(Tools.MVC, Tools.OOP, Tools.DDD), Tools.SOLID, Tools.Microservices),
    ]),
  ]),

  Frontend_Developer: new Role('Frontend Developer', [
    new Level(LevelName.Junior, [
      new Area(Category.Programming_Languages, new MustHaveAll(Tools.JavaScript), Tools.TypeScript),

      new Area(Category.Frontend_Frameworks, new MustHaveAll(Tools.React), Tools.Next, Tools.Vue),

      new Area(Category.Styles, new MustHaveAll(Tools.HTML, Tools.CSS, Tools.Tailwind)),

      new Area(Category.Protocols, new MustHaveAll(Tools.HTTP), Tools.WebSockets, Tools.GraphQL),

      new Area(Category.DevOps_Tools, new MustHaveAll(Tools.Git)),

      new Area(Category.Cloud_Platforms, new MustHaveAll(Tools.Vercel)),

      new Area(Category.UI_Libraries, new MustHaveAtLeastOne(Tools.ShadCN, Tools.Radix, Tools.Bootstrap), Tools.Framer, Tools.GSAP),
    ]),
  ]),
}

export const RolesList = Object.values(Roles)
