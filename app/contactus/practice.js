var x;

const person = {
    name: "john",
    greet: function() {
        console.log("hello", this.name);
    }
}
console.log(x);

function multiplybytwo(num) {
    return num*2;
}

function apply(num, op){
    return op(num)
}
// setTimeout() - to delay the execution of a function or evaluation of smth aft x ms.
// set what fn to call when timer is up
setTimeout(function(){
    console.log("Delayed");
}, 2000);

//The querySelector() method takes a CSS selector as an argument and returns the first HTML element that matches the selector.

// Event delegation is a technique where you attach a single event listener to a parent element to handle events occurring on its child elements.
//getElementById specifically selects an element with the specified ID.
//You can use the preventDefault() method on the event object within an event handler to prevent the default behavior associated with that event.
document.getElementById("myDiv").addEventListener("click", function(event) {
   if(event.target.nodeName === "LI") {
    event.preventDefault();
    console.log(event.target.textContent);
   }
});

// localStorage: persists data even when browser is closed, so diff tabs/windows from same origin can access it
// sessionStorage: only persists for the single browser session
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));

// useful functions

const str = "Hello, World!"
console.log(str.toLowerCase());

const nums = [1,2,3,4,5,5,6,2,2]
const squarednums = nums.map(function(num) {
    return num*num;
});

// splice() - modified the array by add/remove/replace
// slice() - creates new array that contains a portion

const fruits = ["apple", "banana", "orange"];
const sliced = fruits.slice(1,2);
console.log(sliced);
fruits.splice(1,1,"grape");
console.log(fruits);
// op: [ 'apple', 'grape', 'orange' ]
console.log(fruits.includes("banana"));


const result = apply(5, multiplybytwo)

// The reduce() function is used to reduce an array to a single value by applying a function to each element and accumulating the result.
const sum = nums.reduce(function(acc, num){
    return acc+num;
}, 0);

// remove duplicates
// Set
// method 1
fruits.filter((value, index) => fruits.indexOf(value) === index);
// method 2
console.log([...new Set(nums)])

// The fetch() function is used to make asynchronous HTTP requests in JavaScript.
// It returns a Promise that resolves to the response from the server.

// The argument passed to this function is the Response object returned by the fetch call.
// so it depends on the return result of the previous call
// the argument represents the resolved value from the previous Promise in the chain.
// You can chain multiple .then() methods for sequential processing of data as it becomes available.
fetch("https:").then(function(res){
    return res.json();
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log("error occurred: " + err);
})

// different events:
// Click, Mouseover, Keydown, Keyup, Change (when a user changes the value of an HTML input element.)

// async, await
// the async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of an async function until a promise is fulfilled or rejected.

async function fetchData() {
    try {
        const response = await fetch("https:");
        const data = await response.json();
        console.log(data)
    } catch (err) {
        console.log("Error occurred:"+error);
    }
}

fetchData();

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(`The factorial of ${number} is ${fact}`); // Output: The factorial of 5 is 120

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const nameInput = document.getElementById("name");
  const userName = nameInput.value;

  console.log(`Hello, ${userName}!`);
});

// Objects
var obj1 = {
    x:43,
    y: "Hello",
    greet: function(){
        return this.x;
    }
}

var add = function(a,b){
  return a + b;
}

// Arrow Function Expression
var arrowAdd = (a,b) => a + b;

app.get("/", (req,res)=> {
    
})

app.post("/recipe", (req,res) => {

})


document.getElementById('myForm').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    contact: event.target.contact.value
  };

  fetch('http://localhost:3000/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}