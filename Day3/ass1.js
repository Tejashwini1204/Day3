// Function Declaration

function greet() {
    console.log("Hello, World!");
  }
  greet(); // Calls the function
  

// Function Expression

const greet1 = function() {
    console.log("Hello, World!");
};
greet1(); // Calls the function

//Arrow Functions


const greet2 = () => {
    console.log("Tejashwini");
  };
  greet2(); // Calls the function

//Function Parameters and Arguments


function greet3(name) {
    console.log("Hello, " + name + "!");
  }
  greet3("Alice"); // "Hello, Alice!"


//Return Values

function add(a, b) {
    return a + b;
  }
  let result = add(5, 3); // result will be 8
  console.log(result);
  

  //Immediately Invoked Function Expression

  (function() {
    console.log("This function runs immediately!");
  })();
  

  //Higher-Order Functions

  function greet5(name, formatter) {
    console.log(formatter(name));
  }
  
  const capitalize = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  
  greet5("john", capitalize); // "John"

  //Anonymous Functions

  setTimeout(function() {
    console.log("This is an anonymous function!");
  }, 1000);
  
  //Default Parameters

  function greet6(name = "Guest") {
    console.log("Hello, " + name + "!");
  }
  greet6(); // "Hello, Guest!"
  greet6("Alice"); // "Hello, Alice!"

  //Rest Parameters

  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  console.log(sum(1, 2, 3, 4)); // 10
  
  //Function Scope and Closures

  function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  const counter = outer();
  counter(); // 1
  counter(); // 2

  //Callback Functions

  function fetchData(callback) {
    let data = "Some data";
    callback(data);
  }
  
  fetchData(function(data) {
    console.log("Received:", data);
  });
  
  
  