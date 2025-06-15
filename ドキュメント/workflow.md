# Workflow

## 🌿 Branching Strategy

- Create a new branch (from `dev`) for every task (feature, fix, refactor, etc).
  - Example branch names:
    - `feat/login-form`
    - `fix/token-refresh-bug`
    - `refactor/user-service`

- Never commit directly to `dev` or `main`.

- After finishing your work:
  1. Merge into `dev`.
  2. Test on `dev`.
  3. Delete the feature branch.

- When `dev` is stable and ready for production:
  - Merge `dev` into `main`
  - `main` should always reflect production-ready code.


## 📝 Commit Message Pattern

The following table outlines the commit message pattern used in this project:

| Emoji | Type     | Description                      |
| ----- | -------- | -------------------------------- |
| 🎉    | init     | First commit / new setup         |
| ✨    | feat     | Add new features or content      |
| 🧠    | refactor | Rewrite or clean up logic        |
| ⚡️    | improve  | Performance or UX improvements   |
| 🐛    | fix      | Bug fixes                        |
| 🔧    | config   | Tooling, environment, or CI/CD   |
| 🧪    | test     | Add or update tests              |
| 🔥    | remove   | Delete unnecessary code or files |
| 📝    | docs     | Update documentation or comments |
| 🚧    | wip      | Work in progress                 |

### Examples

- ✨: add user authentication feature
- ⚡️: improve image loading performance
- 🐛: fix login redirect bug
- 🔧: update ESLint configuration
