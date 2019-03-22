// Loops: While and for
// https://javascript.info/while-for


/* NOTES
The while loop has the following syntax:

while (condition) {
  // code
  // so-called "loop body"
}

The condition check can be moved below the loop body using the do..while syntax:

do {
  // loop body
} while (condition);


The for loop is the most commonly used loop.

It looks like this:

for (begin; condition; step) {
  // ... loop body ...
}
begin	i = 0	Executes once upon entering the loop.
condition	i < 3	Checked before every loop iteration. If false, the loop stops.
step	i++	Executes after the body on each iteration but before the condition check.
body	alert(i)	Runs again and again while the condition is truthy.


A label is an identifier with a colon before a loop:

labelName: for (...) {
  ...
}

We covered 3 types of loops:

while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
*/


// TASKS

/*Task 1
What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

1 - because it is subtracting 1 from i every time it goes through the loop until it reaches 0
*/

/*Task 2
For every loop iteration, write down which value it outputs and then compare it with the solution.

Both loops alert the same values, or not?

The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );
The postfix form i++ 
1-4

let i = 0;
while (i++ < 5) alert( i );
1-5
The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).

But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.

Then follow 2, 3, 4…

Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

The value i = 5 is the last one, because on the next step while(5 < 5) is false.
*/

/* Task 3
For each loop write down which values it is going to show. Then compare with the answer.

Both loops alert same values or not?

The postfix form:

for (let i = 0; i < 5; i++) alert( i );
The prefix form:

for (let i = 0; i < 5; ++i) alert( i );
*/
//no difference


/* Task 4
Use the for loop to output even numbers from 2 to 10.
*/

for (let i = 2; i <= 10; i++) {

	if (i % 2 == 0) {
	alert (i)
	}
}
/*Task 5
Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

 for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/

let i = 0
while (i++ < 3) alert( `number ${i}!` ); // wrong

//correct
let i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}


/* Task 6
Write a loop which prompts for a number greater than 100. If the visitor 
enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a 
number greater than 100 or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no 
need to implement a special handling for a non-numeric input in this task.


*/