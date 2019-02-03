"use strict";

// operators
// https://javascript.info/operators
// operand = the arguments or numbers on either side of an operator
// unary = 1 operator, such as -1, there is only one number that the operator is being applied to
// binary = 5 + 4 because there are two operands
// link to the precedence table of operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/* Task 1
What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
*/


let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

/* Task 2
What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);
*/

let a = 2;

let x = 1 + (a *= 2); // a = 4 x = 5 CORRECT!