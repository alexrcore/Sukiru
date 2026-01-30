import { Role } from '@/core/domain/role.ts'
import { Area } from '@/core/domain/area.ts'
import { Category } from '@/core/domain/category.ts'
import { MustHaveAll, MustHaveAtLeastOne } from '@/core/domain/pool.ts'
import { Tools } from '@/core/data/tools.ts'

export const Roles = [
  new Role('Junior Backend Developer - JavaScript', [
    new Area(Category.Programming_Languages, new MustHaveAll(Tools.JavaScript, Tools.TypeScript)),

    new Area(Category.Backend_Frameworks, new MustHaveAll(Tools.Express), Tools.Nest),

    new Area(Category.Frontend_Frameworks, new MustHaveAll(), Tools.React, Tools.Next),

    new Area(
      Category.Databases,
      new MustHaveAll(Tools.SQL, Tools.PostgreSQL, Tools.MongoDB, Tools.Cloudinary),
      Tools.MySQL,
      Tools.Redis,
      Tools.Firebase,
      Tools.Supabase
    ),

    new Area(Category.Styles, new MustHaveAll(Tools.HTML, Tools.CSS, Tools.JavaScript)),

    new Area(Category.Protocols, new MustHaveAll(Tools.HTTP, Tools.WebSockets), Tools.GraphQL),

    new Area(Category.DevOps_Tools, new MustHaveAll(Tools.Git), Tools.Docker),

    new Area(Category.Cloud_Platforms, new MustHaveAtLeastOne(Tools.Heroku, Tools.Vercel)),

    new Area(Category.Security, new MustHaveAll(Tools.JWTs, Tools.bcrypt, Tools.CORS, Tools.Helmet), Tools.OAuth),

    new Area(Category.Architectures, new MustHaveAll(Tools.MVC, Tools.OOP, Tools.RESTful)),

    new Area(Category.Testing, new MustHaveAtLeastOne(Tools.Vitest, Tools.Jest)),

    new Area(Category.Libraries, new MustHaveAll(Tools.Zod, Tools.Swagger, Tools.UUID), Tools.Prisma),
  ]),

  new Role('Intermediate Backend Developer - JavaScript', [
    new Area(Category.Programming_Languages, new MustHaveAtLeastOne(Tools.JavaScript, Tools.TypeScript)),

    new Area(Category.Backend_Frameworks, new MustHaveAtLeastOne(Tools.Express, Tools.Nest)),

    new Area(Category.Frontend_Frameworks, new MustHaveAll(Tools.React), Tools.Next),

    new Area(
      Category.Databases,
      new MustHaveAll(Tools.SQL, Tools.PostgreSQL, Tools.MongoDB, Tools.Redis, Tools.Firebase, Tools.Cloudinary),
      Tools.S3,
      Tools.MySQL,
      Tools.Supabase,
      Tools.MariaDB,
      Tools.Cassandra,
      Tools.DynamoDB
    ),

    new Area(Category.Styles, new MustHaveAll(Tools.HTML, Tools.CSS, Tools.JavaScript)),

    new Area(Category.Protocols, new MustHaveAll(Tools.HTTP, Tools.WebSockets, Tools.GraphQL, Tools.PubSub), Tools.gRPC),

    new Area(Category.DevOps_Tools, new MustHaveAll(Tools.Git, Tools['Github Actions'], Tools.Docker), Tools.Kubernetes, Tools.NGINX),

    new Area(Category.Cloud_Platforms, new MustHaveAtLeastOne(Tools.AWS, Tools['Google Cloud'], Tools.Azure)),

    new Area(Category.Security, new MustHaveAll(Tools.JWTs, Tools.OAuth, Tools.bcrypt, Tools.CORS, Tools.Helmet)),

    new Area(Category.Testing, new MustHaveAtLeastOne(Tools.Vitest, Tools.Jest)),

    new Area(Category.Architectures, new MustHaveAll(Tools.MVC, Tools.OOP, Tools.DDD, Tools.ACID, Tools.RESTful), Tools.SOLID, Tools.Microservices),

    new Area(Category.Libraries, new MustHaveAll(Tools.Zod, Tools.Swagger, Tools.UUID), Tools.Prisma),
  ]),

  new Role('Junior Frontend Developer', [
    new Area(Category.Programming_Languages, new MustHaveAll(Tools.JavaScript), Tools.TypeScript),

    new Area(Category.Frontend_Frameworks, new MustHaveAll(Tools.React), Tools.Next, Tools.Vue, Tools.Angular),

    new Area(Category.Styles, new MustHaveAll(Tools.HTML, Tools.CSS, Tools.Tailwind)),

    new Area(Category.UI_Libraries, new MustHaveAtLeastOne(Tools.ShadCN, Tools.Radix, Tools.Bootstrap), Tools.Framer, Tools.GSAP),

    new Area(Category.Databases, new MustHaveAll(), Tools.MongoDB, Tools.PostgreSQL, Tools.Firebase),

    new Area(Category.Protocols, new MustHaveAll(Tools.HTTP), Tools.WebSockets, Tools.GraphQL),

    new Area(Category.DevOps_Tools, new MustHaveAll(Tools.Git, Tools.Vite), Tools.Webpack),

    new Area(Category.Cloud_Platforms, new MustHaveAtLeastOne(Tools.Vercel, Tools.Netlify, Tools.Render)),

    new Area(Category.State_Management, new MustHaveAll(Tools.Redux, Tools['React Query']), Tools.Zustand),

    new Area(Category.Libraries, new MustHaveAll(Tools.Zod)),
  ]),
]
