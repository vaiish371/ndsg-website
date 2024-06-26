import React from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";

ReactDOM.render(
    <div>
    </div>,
    document.getElementById("root")
)

const currDate = new Date();
const year = currDate.getFullYear();

// must use " " for all these values
const customstyle = {
    color: "red",
    fontSize: "20px",
    border: "1px solid black"
}

// use camelCase for writing styles in javascript

ReactDOM.render{
    <h1 style={customstyle}></h1>
}

function Card(props){
    return (
        <div>
            <h1>
                {props.name}
            </h1>
        </div>
    );
}

<Card name="Beyonce" img=""/>

function App () {
    return (
        <div>
            {contacts.map()}
        </div>
    )
}

// forEach will call a function for each element in the array
var newNums = [];
var numbers = [1,2,3,4,5];
numbers.forEach(function (x) {
    newNums.push(x*2);
});

// map is similar but returns a new array so no need to initialize
const newNumbers = numbers.map(function(x){
    return x*2;
});

// reduce
var total = numbers.reduce(function(accumulator, currNum){
    return accumulator = currNum;
})

const newIndex = numbers.findIndex(num => num > 10);

// Map - creates a new array by doing something with each item in the array
// Filter - creates a new array by keeping items that return True
// Reduce - accumulate a value by doing somethig to each item in an array
// Find = find first item that matches from an array

// Arrow functions

const newNumbs = numbers.map(x => x*x);

// Conditional Rendering

// when you inject JS into html, you can only use an expression: smth that evaluates to a single value
// so either you can just send one value, or call a function
// if you don't want to do anyth if condn not met,  just type 'null'
var isLoggedIn = false;
var currTime = 9
function App() {
    return (
        <div>{isLoggedIn === true? <h1>Hello </h1>: null}
        {/* && here just checks if first condition is true and renders next only if so
        If first condition is false, it doesnt bother rendering the next part */}
        {currTime> 12 && <h1>Stop working</h1>}
        </div>
    )
}

// Conditional operators in React
// && 
// Normally: condition && condition
// in react: condition && expression

// States:
// depending on state, a component changes. UI = f(State)
// if conditional rendering does it alrdy 

// Declarative vs Imperative programming
// Imperative: calling functions through event listeners, and changing the element's property
// Declarative: declaring a variable whose  value changes and then through conditonal rendering, you change the state

// To re-render, we use hooks. And reflect changes
// Watch video! Quite interesting

// Hooks
// 1. must use the hook inside a functional component
// useState has 2 arguments actly: the initial value, and a function
// so u can use square brackets to DESTRUCTURE them. 
// use setCount to update the value. cant do directly like count =...
function App () {
    // const state = useState(0);
    const [count, setCount]  = useState(123);
    return (
        <div>

        </div>
    )

}

// Destructuring

// extract array element
const [cat, dog] = animals;

// object literals: extract attribute. got to match the keys in the object
const { name, sound } = cat;
// can also give alias  names:
const { name: catName, sound: soundName} = cat;
// nested destructure
const {dname, dsound, feedingReqments: {food, water}} = dog;
// default values when values are not provided inside object
const { cName= "Fluffy", cSound} = cat;

// event.target.value - event which triggered onChange, target is the element that triggered it, 
// value is the attribute of the element 

// Form: default behaviour is it refreshes the page to submit to make a Post request
// so use e.preventDefault()


function Timer() {
    const [count, setCount] = useState(0);
  
    // runs on first render
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    }, []); // <- add empty brackets here
  
    return <h1>I've rendered {count} times!</h1>;
  }
/*
  <label for="searchName"></label>
  <input id="searchName" type="" ></input>
  <select id="cond1">
    <option value="0">
    <option value="1">
</select>

Client-side:
1. JSP - gives the UI for a form. Lets you submit a form 
and triggers an action and method.
2. Servlet - relevant action servlet gets called that extracts all the input values and constructs a JSON object from it.
Sends them to the controller where the API gets created. 
3. Controller - constructs the api and sends request to that link.
Here, body is set. Path params, query params, etc. is set.


Server-side:







  */