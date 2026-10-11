// ============================================================
// IDENTIFIER RULES IN JAVASCRIPT
// ============================================================
// An identifier is the NAME you give to a variable, function,
// class, parameter, or object property.
//
//   let age = 25;        -> "age" is the identifier
//   function greet() {}  -> "greet" is the identifier
//   class Student {}     -> "Student" is the identifier
// ============================================================


// ------------------------------------------------------------
// RULE 1: Must START with a letter (a-z, A-Z), underscore (_),
//         or dollar sign ($). It can NOT start with a digit.
// ------------------------------------------------------------
let userName = "Bhagya";  // valid - starts with a letter
let _count = 10;          // valid - starts with underscore
let $price = 99.5;        // valid - starts with dollar sign

// let 1name = "Bhagya";  // INVALID - SyntaxError: Invalid or unexpected token
// let 9lives = 9;        // INVALID - cannot start with a digit

console.log("Rule 1:", userName, _count, $price);


// ------------------------------------------------------------
// RULE 2: After the first character, you CAN use letters,
//         digits (0-9), underscore (_), and dollar sign ($).
// ------------------------------------------------------------
let user1 = "Ravi";       // valid - digit after first char
let item_2 = "Pen";       // valid - underscore and digit
let total$ = 500;         // valid - $ at the end
let a1_b2$c3 = "mix";     // valid - mix of everything allowed

console.log("Rule 2:", user1, item_2, total$, a1_b2$c3);


// ------------------------------------------------------------
// RULE 3: NO spaces and NO special characters
//         (like -, @, #, %, &, *, !, ., etc.)
// ------------------------------------------------------------
let firstName = "Bhagya"; // valid - camelCase instead of a space

// let first name = "x";  // INVALID - space not allowed
// let first-name = "x";  // INVALID - "-" is minus operator
// let user@mail = "x";   // INVALID - "@" not allowed
// let price# = 10;       // INVALID - "#" not allowed

console.log("Rule 3:", firstName);


// ------------------------------------------------------------
// RULE 4: Identifiers are CASE-SENSITIVE.
//         "city", "City" and "CITY" are THREE different variables.
// ------------------------------------------------------------
let city = "Hyderabad";
let City = "Bengaluru";
let CITY = "Chennai";

console.log("Rule 4:", city, City, CITY); // Hyderabad Bengaluru Chennai


// ------------------------------------------------------------
// RULE 5: Can NOT use RESERVED KEYWORDS as identifiers.
//         Keywords already have a special meaning in JS.
// ------------------------------------------------------------
// Some reserved words:
//   let, const, var, if, else, for, while, do, switch, case,
//   break, continue, function, return, class, new, this, typeof,
//   true, false, null, try, catch, finally, throw, import, export,
//   default, delete, in, instanceof, void, with, yield, await,
//   extends, super, enum

// let let = 5;           // INVALID - "let" is a keyword
// let class = "A";       // INVALID - "class" is a keyword
// let function = 1;      // INVALID - "function" is a keyword
// let true = 1;          // INVALID - "true" is a literal

let className = "A";      // valid - keyword is only PART of the name
let letValue = 5;         // valid
let myFunction = 1;       // valid

console.log("Rule 5:", className, letValue, myFunction);


// ------------------------------------------------------------
// RULE 6: Unicode letters are allowed (but avoid them in
//         real projects - hard to type and read).
// ------------------------------------------------------------
let café = "coffee";      // valid
let π = 3.14159;          // valid
let नाम = "Bhagya";        // valid - Hindi letters

console.log("Rule 6:", café, π, नाम);


// ------------------------------------------------------------
// RULE 7: No length limit - but keep names meaningful.
// ------------------------------------------------------------
let x = 1000;                          // valid, but meaningless
let monthlySalary = 1000;              // valid and meaningful (BEST)
let thisIsAVeryVeryLongVariableName = 1; // valid, but too long

console.log("Rule 7:", x, monthlySalary, thisIsAVeryVeryLongVariableName);


// ============================================================
// NAMING CONVENTIONS (not rules - just good practice)
// ============================================================
// camelCase        -> variables & functions : studentName, getTotal()
// PascalCase       -> classes               : Student, BankAccount
// UPPER_SNAKE_CASE -> constants             : MAX_SIZE, PI_VALUE
// _leadingUnderscore -> "private" by habit  : _secretKey
// $dollarPrefix    -> DOM / jQuery elements : $button

let studentName = "Anu";                 // camelCase
function getTotal(a, b) { return a + b; } // camelCase
class BankAccount {}                      // PascalCase
const MAX_SIZE = 100;                     // UPPER_SNAKE_CASE

console.log("Conventions:", studentName, getTotal(2, 3), typeof BankAccount, MAX_SIZE);


// ============================================================
// QUICK SUMMARY
// ============================================================
// 1. Start with letter, _ or $       (NOT a digit)
// 2. Then letters, digits, _ or $
// 3. No spaces, no special characters
// 4. Case-sensitive
// 5. No reserved keywords
// 6. Unicode letters allowed
// 7. No length limit - keep it meaningful
// ============================================================
