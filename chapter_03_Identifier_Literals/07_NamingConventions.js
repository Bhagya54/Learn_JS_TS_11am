// ============================================================
// NAMING CONVENTIONS IN JAVASCRIPT
// ============================================================
// Identifier RULES (previous file) decide what is ALLOWED.
// Naming CONVENTIONS decide what is RECOMMENDED.
//
// JavaScript will NOT throw an error if you break a convention,
// but following them makes code easier to read and maintain,
// and other developers instantly understand what a name means.
// ============================================================


// ------------------------------------------------------------
// 1. camelCase
//    First word lowercase, every next word starts with Capital.
//    USE FOR: variables, functions, methods, object properties
// ------------------------------------------------------------
let firstName = "Bhagya";
let totalMarks = 450;
let isLoggedIn = true;

function calculateAverage(total, count) {
    return total / count;
}

let student = {
    rollNumber: 101,
    dateOfBirth: "2000-01-15",
};

console.log("1. camelCase:", firstName, totalMarks, isLoggedIn,
    calculateAverage(totalMarks, 5), student.rollNumber);


// ------------------------------------------------------------
// 2. PascalCase (also called UpperCamelCase)
//    EVERY word starts with a Capital letter.
//    USE FOR: classes, constructor functions
//             (also React components, TypeScript types/interfaces)
// ------------------------------------------------------------
class BankAccount {
    constructor(holderName, balance) {
        this.holderName = holderName; // properties still camelCase
        this.balance = balance;
    }
}

function Person(name) { // old-style constructor function
    this.name = name;
}

let account = new BankAccount("Bhagya", 5000);
let person = new Person("Ravi");

console.log("2. PascalCase:", account.holderName, account.balance, person.name);


// ------------------------------------------------------------
// 3. UPPER_SNAKE_CASE (also called SCREAMING_SNAKE_CASE)
//    All CAPITAL letters, words joined by underscore.
//    USE FOR: true constants - fixed values known before the
//             program runs (config, limits, magic numbers)
// ------------------------------------------------------------
const MAX_LOGIN_ATTEMPTS = 3;
const PI_VALUE = 3.14159;
const API_BASE_URL = "https://api.example.com";

console.log("3. UPPER_SNAKE_CASE:", MAX_LOGIN_ATTEMPTS, PI_VALUE, API_BASE_URL);

// NOTE: not every "const" needs UPPER_SNAKE_CASE.
// If the value is computed at runtime, use camelCase.
const todayDate = new Date().toDateString(); // computed -> camelCase
console.log("   runtime const:", todayDate);


// ------------------------------------------------------------
// 4. snake_case
//    All lowercase, words joined by underscore.
//    NOT common in JavaScript (popular in Python / databases).
//    You will mostly see it in data coming from APIs or DB columns.
// ------------------------------------------------------------
let apiResponse = {
    user_id: 7,          // came from a database / backend
    created_at: "2026-10-09",
};

console.log("4. snake_case:", apiResponse.user_id, apiResponse.created_at);


// ------------------------------------------------------------
// 5. kebab-case
//    All lowercase, words joined by hyphen (-).
//    NOT allowed for identifiers ("-" means minus)!
//    USE FOR: file names, CSS classes, HTML attributes, URLs
//             e.g. user-profile.js, .main-header, data-user-id
// ------------------------------------------------------------
// let user-name = "x";       // INVALID - SyntaxError

let cssClasses = { "main-header": "blue" }; // OK only as a quoted string key
console.log("5. kebab-case (as string key):", cssClasses["main-header"]);


// ------------------------------------------------------------
// 6. _leadingUnderscore
//    Signals "private / internal - don't touch from outside".
//    It is only a HABIT - JS does not actually hide it.
//    (Modern JS has real private fields using #)
// ------------------------------------------------------------
class Counter {
    _step = 1;     // "private" by convention only
    #count = 0;    // TRULY private (ES2022)

    increment() {
        this.#count += this._step;
        return this.#count;
    }
}

let counter = new Counter();
counter.increment();
console.log("6. _private:", counter._step, "| #count via method:", counter.increment());
// console.log(counter.#count); // INVALID - SyntaxError, truly private


// ------------------------------------------------------------
// 7. $dollarPrefix
//    Signals the variable holds a DOM element or jQuery object.
//    (Also used by some frameworks, e.g. $scope in AngularJS)
// ------------------------------------------------------------
// In a browser:
//   let $submitButton = document.querySelector("#submit");
//   let $header = $(".main-header");   // jQuery
let $fakeElement = { tag: "button" };   // pretend DOM element
console.log("7. $prefix:", $fakeElement.tag);


// ------------------------------------------------------------
// 8. Boolean prefixes: is / has / can / should
//    Makes it obvious the value is true/false.
// ------------------------------------------------------------
let isActive = true;
let hasPermission = false;
let canEdit = true;
let shouldRetry = false;

console.log("8. booleans:", isActive, hasPermission, canEdit, shouldRetry);


// ------------------------------------------------------------
// 9. Function names start with a VERB
//    get / set / calculate / fetch / handle / create / update ...
// ------------------------------------------------------------
function getUserName() { return "Bhagya"; }
function handleClick() { return "clicked"; }
function createOrder(item) { return { item }; }

console.log("9. verb functions:", getUserName(), handleClick(), createOrder("Pen"));


// ------------------------------------------------------------
// 10. Plural names for arrays / collections
// ------------------------------------------------------------
let students = ["Anu", "Ravi", "Bhagya"]; // many -> plural
let student1 = students[0];                // one  -> singular

console.log("10. plural:", students, student1);


// ============================================================
// GOOD vs BAD NAMES
// ============================================================
// BAD                    GOOD                  WHY
// let x = 25;            let age = 25;         meaningful
// let d = 7;             let daysInWeek = 7;   descriptive
// let flag = true;       let isVisible = true; clear boolean
// function data() {}     function fetchData(){} verb first
// class car {}           class Car {}          PascalCase for class
// const maxsize = 10;    const MAX_SIZE = 10;  constant style


// ============================================================
// QUICK SUMMARY
// ============================================================
// camelCase          -> variables, functions, methods, properties
// PascalCase         -> classes, constructors (React components)
// UPPER_SNAKE_CASE   -> fixed constants
// snake_case         -> rare in JS (API / DB data)
// kebab-case         -> file names, CSS, URLs (NOT identifiers)
// _name              -> "private" by convention
// #name              -> truly private class field
// $name              -> DOM / jQuery elements
// is/has/can/should  -> booleans
// verbNoun()         -> functions
// plural             -> arrays
// ============================================================
