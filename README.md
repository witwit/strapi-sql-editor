# Monaco Field Editor

## Installation

You need install `strapi-sql-editor` and `monaco-editor`.

```bash
#npm
npm install strapi-sql-editor monaco-editor
```

Enable the plugin from strapi configuration: `config/plugins.ts|js`

```ts
export default () => ({
  "sql-editor": {
    enabled: true
  },
  ...
})
```
