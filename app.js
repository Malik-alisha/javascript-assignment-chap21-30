// // ..................Assignment no 04.....................
// // ..................Chapter 21-25.......................... 
// //.................. Question no 1.....................
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + "! Welcome!");

// // ...................Question no 2.........................
// let favoritePhone = prompt("Enter your favorite mobile phone model:");
// let stringLength = favoritePhone.length;
// document.write("My Favorite phone is: " + favoritePhone + "<br>");
// document.write("Length of string: " + stringLength);

// //....................Question no 3.................. 
// let word = "Pakistani";
// let myindex = word.indexOf("n");
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + myindex);

// // .................Question no 4...................... 
// let greet = "Hello World";
// let lastIndex = word.lastIndexOf("i");
// let charAtIndex3 = word.charAt(3);
// document.write("String: " + greet + "<br>");
// document.write("Last index of 'i': " + lastIndex + "<br>");
// document.write("Character at index 3: " + charAtIndex3);

// // ................Question no 5..........................
// let myword = "Pakistani";
// let mycharAtIndex3 = word.charAt(3);
// document.write("String: " + myword + "<br>");
// document.write("Character at index 3: " + mycharAtIndex3charAtIndex3);

// // ................Question no 6.............................
// let FirstName = prompt("Enter your first name:");
// let LastName = prompt("Enter your last name:");
// let FullName = FirstName.concat(" ", LastName);
// alert("Hello, " + FullName + "! Welcome!");

// // ...................Question no 7.....................
// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + newCity);

// // .................Question no 8...................................
// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let newMessage = message.replace(/and/g, "&");
// document.write("Original message: " + message + "<br>");
// document.write("After replacement: " + newMessage);

// // ......................Question no 9.....................
// let value = "472";
// document.write("Value: " + value + "<br>Type: " + typeof value + "<br>");
// let numberValue = Number(value);
// document.write("Value: " + numberValue + "<br>Type: " + typeof numberValue);
// let items = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC Bakery. What do you want to order?").toLowerCase();

// // .....................Question no 10.....................
// let UserInput = prompt("Enter a word:");
// let upperCaseInput = UserInput.toUpperCase();
// document.write("User input: " + UserInput + "<br>");
// document.write("Upper case: " + upperCaseInput);


// // .....................Question no 11.....................

// let usersInput = prompt("Enter a word:");
// let titleCaseInput = usersInput.charAt(0).toUpperCase() + usersInput.slice(1).toLowerCase();
// document.write("User input: " + usersInput + "<br>");
// document.write("Title case: " + titleCaseInput);

// // .....................Question no 12.....................
// let num = 35.36;
// let result = num.toString().replace(".", "");
// document.write("Number: " + num + "<br>");
// document.write("Result: " + result);

// //..................... Question no 13..................... 
// let username = prompt("Enter your username:");
// function isValidUsername(username) {
//     let specialSymbols = ['@', '.', ',', '!'];
//     for (let i = 0; i < username.length; i++) {
//         if (specialSymbols.includes(username[i])) {
//             return false;
//         }
//     }
//     return true;
// }
// if (isValidUsername(username)) {
//     document.write("Username: " + username + "<br>");
//     document.write("Username is valid.");
// } else {
//     alert("Please enter a valid username. It cannot contain any special symbols: @, ., ,, !");
// }

// // .....................Question no 14.....................
// let index = items.indexOf(userInput);
// if (index !== -1) {
//     alert(userInput + " is available at index " + index + " in our bakery");
// } else {
//     alert("We are sorry. " + userInput + " is not available in our bakery");
// }

// // .....................Question no 15.....................
// function isValidPassword(password) {
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         return false;
//     }

//     if (!isNaN(password[0])) {
//         alert("Password cannot begin with a number.");
//         return false;
//     }

//     const hasAlphabets = /[a-zA-Z]/.test(password);
//     const hasNumbers = /\d/.test(password);

//     if (!hasAlphabets || !hasNumbers) {
//         alert("Password must contain both alphabets and numbers.");
//         return false;
//     }

//     return true;
// }

// let password = prompt("Enter your password:");
// while (!isValidPassword(password)) {
//     password = prompt("Please enter a valid password:");
// }

// alert("Password is valid!");

// // .....................Question no 16.....................
// var university = "University of Karachi";
// var universityArray = university.split("");
// document.write("Elements of the array:<br>");
// universityArray.forEach(function(char) {
//     document.write(char + "<br>");
// });

// // .....................Question no 17.....................
// let userinput = prompt("Enter a word:");
// let lastCharacter = userinput.charAt(userinput.length - 1);
// document.write("User input: " + userinput + "<br>");
// document.write("Last character of input: " + lastCharacter);

// // .....................Question no 18......................
// let sentence = "The quick brown fox jumps over the lazy dog";
// let lowerCaseSentence = sentence.toLowerCase();
// let matches = lowerCaseSentence.match(/\bthe\b/g)
// let occurrences = matches ? matches.length : 0;
// document.write("Text: " + sentence + "<br>");
// document.write("There are 2 occurrence(2) of the word 'the': " + occurrences);




// // ...........................Chapter 26-30..........................................
// // .....................Question no 1.....................
// let number = parseFloat(prompt("Enter a positive number:"));
// let roundedValue = Math.round(number);
// let floorValue = Math.floor(number);
// let ceilValue = Math.ceil(number);
// document.write("Number: " + number + "<br>");
// document.write("Round off value: " + roundedValue + "<br>");
// document.write("Floor value: " + floorValue + "<br>");
// document.write("Ceil value: " + ceilValue + "<br>");

// // .....................Question no 2.....................
// let numbers = parseFloat(prompt("Enter a negative floating-point number:"));
// let roundedValues = Math.round(numbers);
// let floorValues = Math.floor(numbers);
// let ceilValues = Math.ceil(numbers);
// document.write("Number: " + numbers + "<br>");
// document.write("Round off value: " + roundedValues + "<br>");
// document.write("Floor value: " + floorValues + "<br>");
// document.write("Ceil value: " + ceilValues + "<br>");

// // .....................Question no 3.....................
// let mynumber = parseFloat(prompt("Enter a number:"));
// let absoluteValue = Math.abs(mynumber);
// document.write("The absolute value of " + mynumber + " is " + absoluteValue);

// //..................... Question no 4 .....................
// let diceValue = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + diceValue);

// // .....................Question no 5.....................
// let coinToss = Math.floor(Math.random() * 2);
// let coinValue = coinToss === 0 ? "Heads" : "Tails";
// document.write("Random coin value: " + coinValue);

// // .....................Question no 6 .....................
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randomNumber);

// //..................... Question no 7.....................
// let weightInput = prompt("Enter your weight in kilograms:");
// let weightValue = parseFloat(weightInput);
// if (weightInput.toLowerCase().includes("kgs") || weightInput.toLowerCase().includes("kilograms")) {
//     weightValue = parseFloat(weightInput.replace(/[^0-9.-]/g, ''));
// }
// document.write("Your weight is " + weightValue + " kilograms.");

// // .....................Question no 8.....................
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Enter a number between 1 and 10"));
// if (userGuess === secretNumber) {
//     document.write("Congratulations! You guessed the secret number: " + secretNumber);
// } else {
//     document.write("Try again! The secret number was: " + secretNumber);
// }


// // .....................Assignment no :4 End....................................