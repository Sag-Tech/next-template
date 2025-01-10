# REST

### Tech stack:

- Languages: JS, TS
- Libs & frameworks: next.js, tailwind, axios
- Linters, type checkers, etc.: eslint, prettier, husky
- Package manager: npm

## Getting Started

#### 1. Install dependencies

```bash
npm i
```

#### 2. Install husky(only dev)

```bash
- npx husky-init
- npx husky set .husky/pre-commit 'npx lint-staged@15.2.5 && npm run build'
- npm pkg delete scripts.prepare
```

#### 3. Run dev server

```bash
npm run dev
```
