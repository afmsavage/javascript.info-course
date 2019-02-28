"use strict";

// Conditional Operators - if and '?'
// http://javascript.info/ifelse

// notes
/* A number 0, an empty string "", null, undefined, and NaN all become false. 
Because of that they are called “falsy” values.

--example 1--
let var = prompt(`is tony sweet?`, '');
  if (var == yes) {
    alert( 'damn right');
  } else {
    alert( 'bruh, rethink' );
  }

--example 2 using else if--
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

--ternerary operator '?'--
LONG WAY
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);

USING ?
let accessAllowed = (age > 18) ? true : false;

Syntax
let result = condition ? value1 : value2;


-----------------------------------------------------------------------------------

/*  TASK 1
Will alert be shown?

if ("0") {
  alert( 'Hello' );
}
*/
// NO
// CORRECT answer is yes because 0 is a string in this case, not a number.


/*  TASK 2
Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’
If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”

                         ---FLOWCHART FROM WEBSITE---
                                    Begin
                                      |
                        "Whats the official name of Javascript"
                         |                                  |
                        Other                            ECMAScript
                         |                                  |
                    "You don't know?                    "RIGHT!"
                      ECMASCRIPT!"
*/

let javaScript = prompt('What is the official name of Javascript?', '');

  if ( javaScript == 'ECMAScript') {
    alert( 'RIGHT!' ); 
  } else { 
    alert( 'You do not know?' );
  }

/* From the page.  My javascript was correct!
<!DOCTYPE html>
<html>
<body>
  <script>
    'use strict';
    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>
</body>
</html>
*/


/*  TASK 3
Using if..else, write the code which gets a number via prompt and then shows in alert:

1, if the value is greater than zero,
-1, if less than zero,
0, if equals zero.
In this task we assume that the input is always a number.
*/



/*  TASK 4
Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/



/*  TASK 5
Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/