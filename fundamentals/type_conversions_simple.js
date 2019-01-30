// https://javascript.info/type-conversions

/* What are results of these expressions?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
*/

What are results of these expressions?

"" + 1 + 0 // 10 // correct!, addition between a string and a number, 1, converts this to a string and then string add the 0
"" - 1 + 0 // 10 // -1, the empty string, "" gets converted to the number 0 since it cannot be math'd~!.. 0-1+0=-1
true + false // true // 1, dont understand why this is just the number 1, /shrug
6 / "3" // 2 // correct!
"2" * "3" // 6 // correct!
4 + 5 + "px" // 45px // 9px, the 4+5 gets added as numbers, and then the string added
"$" + 4 + 5 // $45 // correct!
"4" - 2 // 2 // correct
"4px" - 2 // NaN // correct!
7 / 0 // undefined // Infinity oops, wasn't sure if it was undefined or infinity as the value
"  -9  " + 5 // -4 // " -9  5" // adding a string to a number just adds the number to the string, with the spaces
"  -9  " - 5 // -14 // correct!
null + 1 // 1 // correct!
undefined + 1 // 1 // NaN, undefined becomes NaN after the numeric conversion since its just numbers in this  
