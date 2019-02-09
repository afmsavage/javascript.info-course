// Comparisons
// https://javascript.info/comparison


/* Task 1 
What will be the result for these expressions?

5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
*/

5 > 4 // true
"apple" > "pineapple" // true // its false :| im not smart
"2" > "12" // true 
undefined == null // false // true - these values == each other only
undefined === null // true // false - strict equality is strict :|
null == "\n0\n" // false 
null === +"\n0\n" // false

/*
Notes
-Comparison operators return a boolean value.
-Strings are compared letter-by-letter in the “dictionary” order.
-When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
-The values null and undefined equal == each other and do not equal any other value.
-Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.
*/