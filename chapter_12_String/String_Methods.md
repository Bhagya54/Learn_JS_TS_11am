# JavaScript String Methods

Let `const s = "Hello World";` unless stated otherwise.

## Length / Access

| Method | Explanation | Example | Result |
|---|---|---|---|
| `length` (property) | Number of UTF-16 code units in the string | `s.length` | `11` |
| `charAt(i)` | Character at index `i` (empty string if out of range) | `s.charAt(1)` | `"e"` |
| `at(i)` | Character at index `i`; negative counts from the end | `s.at(-1)` | `"d"` |
| `charCodeAt(i)` | UTF-16 code unit (number) at index `i` | `"A".charCodeAt(0)` | `65` |
| `codePointAt(i)` | Full Unicode code point at index `i` (handles emoji) | `"😀".codePointAt(0)` | `128512` |

## Search

| Method | Explanation | Example | Result |
|---|---|---|---|
| `indexOf(x)` | Index of first match, `-1` if not found | `s.indexOf("o")` | `4` |
| `lastIndexOf(x)` | Index of last match, `-1` if not found | `s.lastIndexOf("o")` | `7` |
| `includes(x)` | `true` if substring exists anywhere | `s.includes("World")` | `true` |
| `startsWith(x)` | `true` if string begins with `x` | `s.startsWith("Hell")` | `true` |
| `endsWith(x)` | `true` if string ends with `x` | `s.endsWith("ld")` | `true` |
| `search(regex)` | Index of first regex match, `-1` if none | `s.search(/W/)` | `6` |
| `match(regex)` | Array of matches (with `g` flag), or `null` | `s.match(/o/g)` | `["o","o"]` |
| `matchAll(regex)` | Iterator of all matches with capture groups (needs `g`) | `[..."a1b2".matchAll(/\d/g)].length` | `2` |

## Extract

| Method | Explanation | Example | Result |
|---|---|---|---|
| `slice(start, end)` | Part from `start` up to `end`; negatives allowed | `s.slice(0, 5)` | `"Hello"` |
| `substring(start, end)` | Like `slice` but negatives become 0 and args swap if reversed | `s.substring(6)` | `"World"` |
| `substr(start, len)` (deprecated) | Part from `start` with length `len`; avoid in new code | `s.substr(6, 3)` | `"Wor"` |

## Case

| Method | Explanation | Example | Result |
|---|---|---|---|
| `toUpperCase()` | Convert all characters to uppercase | `s.toUpperCase()` | `"HELLO WORLD"` |
| `toLowerCase()` | Convert all characters to lowercase | `s.toLowerCase()` | `"hello world"` |
| `toLocaleUpperCase()` | Uppercase using locale-specific rules | `"i".toLocaleUpperCase("tr")` | `"İ"` |
| `toLocaleLowerCase()` | Lowercase using locale-specific rules | `"I".toLocaleLowerCase("tr")` | `"ı"` |

## Trim / Pad

| Method | Explanation | Example | Result |
|---|---|---|---|
| `trim()` | Remove whitespace from both ends | `"  hi  ".trim()` | `"hi"` |
| `trimStart()` | Remove whitespace from the start only | `"  hi".trimStart()` | `"hi"` |
| `trimEnd()` | Remove whitespace from the end only | `"hi  ".trimEnd()` | `"hi"` |
| `padStart(n, c)` | Pad the start with `c` until length is `n` | `"5".padStart(3, "0")` | `"005"` |
| `padEnd(n, c)` | Pad the end with `c` until length is `n` | `"5".padEnd(3, "0")` | `"500"` |

## Modify / Combine

| Method | Explanation | Example | Result |
|---|---|---|---|
| `concat(...)` | Join one or more strings to the original | `"a".concat("b", "c")` | `"abc"` |
| `repeat(n)` | Repeat the string `n` times | `"ab".repeat(3)` | `"ababab"` |
| `replace(a, b)` | Replace first match of `a` with `b` | `s.replace("World", "JS")` | `"Hello JS"` |
| `replaceAll(a, b)` | Replace every match of `a` with `b` | `"a-b-c".replaceAll("-", "+")` | `"a+b+c"` |
| `split(sep)` | Break string into an array at each separator | `"a,b,c".split(",")` | `["a","b","c"]` |

## Compare / Normalize

| Method | Explanation | Example | Result |
|---|---|---|---|
| `localeCompare(x)` | Compare strings by locale order: `-1`, `0` or `1` | `"a".localeCompare("b")` | `-1` |
| `normalize()` | Convert to a canonical Unicode form (default NFC) | `"Å".normalize()` | `"Å"` |
| `isWellFormed()` | `true` if no lone surrogates exist | `"abc".isWellFormed()` | `true` |
| `toWellFormed()` | Replace lone surrogates with `U+FFFD` | `"ab\uD800".toWellFormed()` | `"ab�"` |

## Conversion

| Method | Explanation | Example | Result |
|---|---|---|---|
| `toString()` | Return the string value | `s.toString()` | `"Hello World"` |
| `valueOf()` | Return the primitive string value | `s.valueOf()` | `"Hello World"` |
| `[Symbol.iterator]` | Lets you loop or spread a string char by char | `[..."abc"]` | `["a","b","c"]` |

## Static

| Method | Explanation | Example | Result |
|---|---|---|---|
| `String.fromCharCode()` | Build string from UTF-16 code units | `String.fromCharCode(72, 105)` | `"Hi"` |
| `String.fromCodePoint()` | Build string from Unicode code points | `String.fromCodePoint(128512)` | `"😀"` |
| `String.raw` | Tag function: template string without escape processing | ``String.raw`a\nb` `` | `"a\\nb"` |
| `String(x)` | Convert any value to a string | `String(123)` | `"123"` |

## Note

Strings are immutable: every method returns a new string, original unchanged.
