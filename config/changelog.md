## Install

```shell
pnpm i -D eslint
pnpm i -D prettier@3.1.0
pnpm i -D eslint-config-prettier
pnpm i -D eslint-plugin-prettier
pnpm i -D eslint-plugin-react-hooks
pnpm i -D @typescript-eslint/parser@^5.0.1 
pnpm i -D @ianvs/prettier-plugin-sort-imports
pnpm i -D prettier-plugin-tailwindcss


pnpx eslint --init
pnpx eslint .
pnpx eslint . --fix
pnpx prettier .
pnpx prettier . --write
pnpx eslint --debug src/utils
pnpx eslint --debug "**/*/UserList.tsx"


pnpm i -D eslint-config-airbnb ## or eslint-config-airbnb-base
pnpm i -D eslint-config-airbnb-typescript
pnpm i -D eslint-plugin-promise
pnpm i -D eslint-plugin-sonarjs
pnpm i -D eslint-plugin-newline-destructuring
pnpm i -D eslint-formatter-pretty@5
pnpm i -D eslint-plugin-etc
pnpm i -D eslint-plugin-encapsulate
```

### Prettier-eslint (Optinal)

```shell
pnpm i -D @typescript-eslint/parser@^5.0.1 
pnpm i -D prettier-eslint@^16.3.0  prettier-eslint-cli@^8.0.1
```

```shell
pnpm i axios 
pnpm i @tanstack/react-query@4.36.1
pnpm i -D tailwindcss
pnpm i -D postcss
pnpm i -D autoprefixer
pnpm i class-variance-authority
```

### Package Json

```json
{
  ...,
  "scripts": {
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --format=pretty",
    "lint:fix": "eslint --fix . --ext ts,tsx",
    "prettify": "prettier . --write",
    "format": "npm run prettify && npm run lint:fix"
  },
},
```

## References

https://www.npmjs.com/package/eslint-config-airbnb-typescript

## Rename .eslintrc -> .eslintrc.js
