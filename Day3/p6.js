for(let i=1;i<=100;i++){
    if (i%2 == 0){
       console.log(i);
    }
}


let multiplesOf2 = [];
let multiplesOf5 = [];
let multiplesOf7 = [];
let multiplesOf10 = [];

// Iterate through the first 100 natural numbers
for (let i = 1; i <= 100; i++) {
    // Collect multiples of 2
    if (i % 2 === 0 && multiplesOf2.length < 5) {
        multiplesOf2.push(i);
    }

    // Collect multiples of 5
    if (i % 5 === 0 && multiplesOf5.length < 5) {
        multiplesOf5.push(i);
    }

    // Collect multiples of 7
    if (i % 7 === 0 && multiplesOf7.length < 5) {
        multiplesOf7.push(i);
    }

    // Collect multiples of 10
    if (i % 10 === 0 && multiplesOf10.length < 5) {
        multiplesOf10.push(i);
    }
}

// Combine the results into one array and print the first 20 numbers
let result = [...multiplesOf2, ...multiplesOf5, ...multiplesOf7, ...multiplesOf10];
console.log(result);


for (let i = 0; i < 26; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        // Convert the number to its corresponding alphabet
        let alphabet = String.fromCharCode(65 + i);
        console.log(alphabet);
    }
}

// Loop through numbers from 25 (Z) to 0 (A)
for (let i = 25; i >= 0; i--) {
    // Convert the number to its corresponding alphabet
    let alphabet = String.fromCharCode(65 + i);
    console.log(alphabet);
}



// Loop through the alphabet from A to Z
for (let i = 0; i < 26; i++) {
    // Get the uppercase letter
    let upperCaseLetter = String.fromCharCode(65 + i);
    
    // Convert to lowercase letter
    let lowerCaseLetter = upperCaseLetter.toLowerCase();
    
    // Print both uppercase and lowercase
    console.log(`Uppercase: ${upperCaseLetter}, Lowercase: ${lowerCaseLetter}`);
}


// Loop through numbers 65 to 90 (for 'A' to 'Z')
for (let i = 65; i <= 90; i++) {
    // Convert the number to a character manually
    let character = '';
    let remainder = i;
    
    // Loop to build the character manually
    while (remainder > 0) {
        // Find the character for the current number
        let charCode = remainder % 256;
        if (charCode >= 65 && charCode <= 90) {
            // It corresponds to an uppercase letter
            character = String.fromCharCode(charCode) + character;
        }
        remainder -= charCode; // Move to the next part
    }
    
    console.log(character);
}
