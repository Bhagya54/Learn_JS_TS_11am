# Real-World Object: Config with Environment Variables

```js
retryCount: parseInt(process.env.RETRY_COUNT || '3', 10) // "5" -> 5
```

## Step-by-step explanation

### 1. `process.env.RETRY_COUNT`
- Reads the environment variable named `RETRY_COUNT`.
- Env variables are **always strings** (or `undefined` if not set).
- Example: `RETRY_COUNT=5` → `process.env.RETRY_COUNT` is `"5"` (string, not number).

### 2. `process.env.RETRY_COUNT || '3'`
- `||` (logical OR) returns the left value if truthy, else the right value.
- Variable set → uses it (`"5"`).
- Variable not set (`undefined`) → falls back to default `'3'`.
- Default is a string too, so `parseInt` gets a string either way.

### 3. `parseInt(value, 10)`
- Converts string → integer.
- `10` = radix (base 10, decimal). Always pass it to avoid surprises (e.g. strings starting with `0x` parsed as hex).
- `"5"` → `5`, `"3"` → `3`.

## Flow table

| `.env` / shell value | `process.env.RETRY_COUNT` | After `\|\|` | After `parseInt` |
|---|---|---|---|
| `RETRY_COUNT=5` | `"5"` | `"5"` | `5` |
| not set | `undefined` | `'3'` | `3` |
| `RETRY_COUNT=` (empty) | `""` (falsy) | `'3'` | `3` |
| `RETRY_COUNT=abc` | `"abc"` | `"abc"` | `NaN` (no validation!) |

## Why parseInt?
Number comparisons/loops need a real number:

```js
"5" + 1   // "51"  (string concat - bug)
5 + 1     // 6
```

---

## Working with a `.env` file

### 1. Install the `dotenv` node module
```
npm i dotenv
```

### 2. Create a `.env` file inside your project directory
```
project/
├── .env
├── 122_Real_JSObj.js
└── package.json
```

### 3. Give values in `key=value` form
No quotes, no spaces around `=`.

```
BASE_URL=https://staging.com
RETRY_COUNT=5
```

![image.png](https://eraser.imgix.net/workspaces/tQk9u9Xc6JbfEqlqhxhA/A9kFy9z08pPQFYVjb9aMKBxon6l2/image_LcY9CcPYLOX1K15ZVUEAB.png?ixlib=js-3.8.0 "image.png")

### 4. Load and access values
Call `require('dotenv').config()` once, at top of file. Then read via `process.env`:

```js
require('dotenv').config()

console.log(process.env.BASE_URL)     // "https://staging.com"
console.log(process.env.RETRY_COUNT)  // "5"
```

### Notes
- Add `.env` to `.gitignore` — it often holds secrets (passwords, API keys). Commit a `.env.example` with dummy values instead.
- Restart the node process after editing `.env`; it is read only at startup.
- Real shell env vars win over `.env` values (dotenv does not override existing ones).
