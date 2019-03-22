// Logical Opertors
// https://javascript.info/logical-operators

/* notes
There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

----OR----
The OR || operator does the following:

Evaluates operands from left to right.
For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were false), returns the last operand.


----AND----
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.

The precedence of AND && operator is higher than OR ||.


----NOT----
The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

result = !value;
The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.
For instance:

 alert( !true ); // false
 alert( !0 ); // true

*/





// --TASKS--

/* Task 1
Output of
alert( null || 2 || undefined );

2 - correct!


*/

/* Task 2
Output of
alert( alert(1) || 2 || alert(3) );
*/

//1 - wrong... it returns 1 and then 2


/* Task 3
What will this code show?
alert( 1 && null && 2 );

null - correct!
*/

/* Task 4
What will this code show?
alert( alert(1) && alert(2) );

2 -- incorrect....

The answer: 1, and then undefined.
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined is a falsy value. 
And && looks for a falsy value and returns it, so it’s done.
*/


/* Task 5
What will the result be?
alert( null || 2 && 3 || 4 );

3 - correct!
*/


/* task 6
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.

stumped on this one...

The first variant:
if (!(age >= 14 && age <= 90))

The second variant:
if (age < 14 || age > 90)
*/



/* Task 6
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // executes
if (-1 && 0) alert( 'second' ); // doesnt
if (null || -1 && 1) alert( 'third' ); // executes
*/

