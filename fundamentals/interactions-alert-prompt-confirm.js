// Alert command, prompt command and confirm 
// http://javascript.info/alert-prompt-confirm

// NOTES
    // PROMPT
        // result = prompt(title[, default]);

    // ALERT
        // alert(message);
        //example
            /*let age = prompt('How old are you?', 100);
            alert(`You are ${age} years old!`); // You are 100 years old! */

    // CONFIRM
    // result = confirm(question);
    //example
    /* let isBoss = confirm("Are you the boss?");
    alert( isBoss ); // true if OK is pressed */

// script called by the website below
let name = prompt('What is your name?', 'Antonio');
alert(`Your name is ${name} and it is silly because it is not Antonio`);


// TASK
// Create a website that asks for a name and outputs it!
// Website I created
/* <!DOCTYPE HTML>
<html>
<title> Javascript.info Course </title>
<body>
Alert, Prompt, and Confirms.  Made this website for the task to create a prompt to ask for a user's name and then display it
	<p>
<!-- Enter your script directly into the html doc 
		<script>
			Enter JS here
		</script> -->
<!-- OR -->
<!-- Source a script from a filename on the server -->
		<script src="scripts/nameprompt.js">			
		</script>
	</p>
</body>
</html>*/
