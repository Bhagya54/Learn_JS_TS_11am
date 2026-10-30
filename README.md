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
| [chapter_06_Operators](chapter_06_Operators/) | Operators | `30_Assignment_Operator.js` – assignment `=`<br>`31_Arithmetic_Operator.js` – `+ - * / % **`<br>`32_Modulus_Operator.js` – `%` and even/odd check<br>`33_Exponential_Operator.js` – `**` exponent<br>`34_Compound_Operator.js` – `+= -= *= /= %=`<br>`35_Comparision_Operator.js` – `< <= > >= == === != !==`<br>`36_Comparision_Loose_Strict.js` – `==` vs `===` with numbers, strings, booleans<br>`37_Loose_Strict.js` – type coercion, `null` vs `undefined`<br>`38_Confusing_Comparison.js` – tricky coercion cases, `NaN`, non-transitive `==`<br>`39_Logical_Operator.js` – `&&`, `\|\|`, `!`<br>`40_String_Concatenation_Op.js` – string `+=`<br>`41_Ternary_Operator.js` – ternary & nested ternary (test results, env URLs, status codes)<br>`42_TypeOf_Operator.js` – `typeof` results (incl. `null` → `object`, `[]` → `object`)<br>`43_Nullish_Operator.js` – nullish coalescing `??`<br>`44_Increment_Decrement.js` – pre-increment `++a` & pre-decrement `--a`<br>`45_Post_Increment.js` – post-increment `a++`<br>`46_IQ_Increment_Decrement.js` – interview Q: `a++` return value<br>`47_IQ_Adv.js` – interview Q: `++a + a`, `a++ + ++a`, `++a + ++a` |
| [chapter_07_Control_Statement](chapter_07_Control_Statement/) | Control statements | `48_If_Else.js` – `if`/`else` voting age check<br>`49_If_ElseIf_Else.js` – `else if` grading ladder<br>`50_Real_If_Else.js` – nested `if` for login & user roles<br>`51_API_If_Else.js` – API status code checks<br>`52_IQ_If_Else.js` – interview Q: truthy & falsy values<br>`53_Real_If_Example.js` – logical operators + `if` for login validation<br>`54_IQ.js` – interview Q: `if` without braces<br>`55_IQ.js` – interview Q: `if` alone allowed, `else` without `if` not |
| [chapter_08_switch](chapter_08_switch/) | Switch | `56_Switch.js` – `switch` day-of-week with `default`<br>`57_Real_Example.js` – `switch` on API response codes<br>`58_Switch_Group.js` – grouped cases: weekday vs weekend<br>`59_Switch_Group.js` – grouped cases: browser engine families<br>`60_IQ.js` – interview Q: fall-through without `break`<br>`61_IQ.js` – interview Q: `switch (true)` for range checks<br>`62_IQ.js` – interview Q: duplicate `case` labels (first wins)<br>`63_IQ.js` – interview Q: `switch` uses strict `===` matching |
| [chapter_09_Loops](chapter_09_Loops/) | Loops | `64_For_Loop.js` – `for` loop 1 to 10<br>`65_For_Loop.js` – `for` loop with `_1` as identifier<br>`66_IQ.js` – interview Q: loop that never runs, infinite `for`, `if` inside loop<br>`67_While.js` – `while` loop<br>`68_Do_While.js` – `while` vs `do...while` (runs at least once)<br>`69_Do_While_Retry.js` – `do...while` login retry<br>`70_IQ.js` – interview Q: countdown `while`<br>`71_IQ.js` – interview Q: `do...while` with false condition<br>`72_IQ.js` – interview Q: `continue` vs `break`<br>`73_IQ.js` – interview Q: `while` vs `do...while`, `break` inside `do...while` |
| [chapter_10_Arrays](chapter_10_Arrays/) | Arrays | `74_Arrays.js` – empty, indexed, out-of-range (`undefined`), mixed-type arrays<br>`75_WaysToCreateArray.js` – literal, `new Array()`, `Array.of()`, `Array.from()`<br>`76_Array_Access` – index access, `at()` with negative index, update by index<br>`77_Add_Remove.js` – `push`/`pop`/`unshift`/`shift` & empty-array edge cases<br>`78_Splice_Array.js` – `splice(start, deleteCount, ...items)` remove/replace/add<br>`79_Real_Ex.js` – browser list: loop, `pop`, `unshift`<br>`80_Search_Array.js` – `indexOf`, `lastIndexOf`, `includes`, `find`, `findLast`<br>`81_Iterate_Array.js` – `for`, `for...of`, `forEach`<br>`82_Transform_Array.js` – `map`, `filter`, `reduce` |

## Extras

- [VSCode_Shortcuts.md](VSCode_Shortcuts.md) – VS Code keyboard shortcuts (Windows & Mac)

## Running Examples

```bash
node chapter_01_Basics/01_Basics.js
```
