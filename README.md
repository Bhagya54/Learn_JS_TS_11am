# Learn JS & TS

Hands-on practice repo for learning JavaScript and TypeScript, organized chapter by chapter.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)

Verify setup:

```bash
node -v
node chapter_01_Basics/03_JS_Verify_setup.js
```

## Structure

| Chapter | Topic | Files |
|---------|-------|-------|
| [chapter_01_Basics](chapter_01_Basics/) | JS basics & setup | `01_Basics.js` – Hello World, variables<br>`02_JS.js` – block scope, loops, function hoisting<br>`03_JS_Verify_setup.js` – print OS platform & architecture<br>`04_HotCode.js` – hot functions / JIT optimization demo |
| [chapter_02_JavaScript_Concept](chapter_02_JavaScript_Concept/) | Core concepts | `05_JSBasics.js` – variable declaration, keyword vs identifier, reassignment |
| [chapter_03_Identifier_Literals](chapter_03_Identifier_Literals/) | Identifiers & comments | `06_Identifier_Rules.js` – identifier naming rules<br>`07_NamingConventions.js` – camelCase, PascalCase, UPPER_SNAKE_CASE conventions<br>`08_Comments.js` – single-line & multi-line comments |
| [chapter_04_var_let_const](chapter_04_var_let_const/) | `var`, `let`, `const` | `09_var_let_const.js` – redeclaration vs reassignment<br>`10_Function.js` – defining & calling functions<br>`11_var_explained.js` – `var` global vs local scope<br>`12_let_explained.js` – `let` reassignment & block scope<br>`13_const_explained.js` – `const` no redeclare/reassign<br>`14_var_functionscope.js` – `var` is function scoped<br>`15_let_blockscope.js` – `let` is block scoped<br>`16_var_hoisting.js` – `var` hoisting (`undefined`)<br>`17_var_hoisting_fn.js` – `var` hoisting inside functions<br>`18_let_hoisting.js` – `let` hoisting & Temporal Dead Zone<br>`19_let_hoisting.js` – TDZ with shadowed block variables<br>`20_let_const_var.js` – `var` vs `let`/`const` before declaration<br>`21_Jr_QA.js` – interview Q: accessing `let` before init |
| [chapter_05_Literal](chapter_05_Literal/) | Literals & data types | `22_Literals.js` – literal types & `typeof`<br>`23_NullVsUndefined.js` – `null` vs `undefined`<br>`24_null.js` – `null` vs unassigned variable<br>`25_Literal_Number.js` – integer, negative, hex, octal literals<br>`26_Literal_Number_all.js` – all number forms, `NaN`, `Infinity`, limits, BigInt<br>`27_string_literal.js` – single & double quote strings<br>`28_Template_Literal.js` – template literals for API URLs, locators, logs<br>`29_backtick_singlequote_doublequote.js` – `'` vs `"` vs `` ` `` |

## Extras

- [VSCode_Shortcuts.md](VSCode_Shortcuts.md) – VS Code keyboard shortcuts (Windows & Mac)

## Running Examples

```bash
node chapter_01_Basics/01_Basics.js
```
