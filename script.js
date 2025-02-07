// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome to Tomato Man!`;
}

// Invoking the functions
const sum = addNumbers(5, 10);
console.log(`Sum: ${sum}`);

const greeting = greetUser("Tommy");
console.log(greeting);

// Object with a single property
const tomato = {
    type: "Cherry"
};

// Object with multiple properties
const tomatoPlant = {
    type: "Roma",
    height: "2 feet",
    age: 1, // in years
    isFruitBearing: true,
    getDetails: function() {
        return `${this.type} tomato plant is ${this.height} tall and ${this.age} year(s) old.`;
    }
};

// Log details of tomato plant
console.log(tomatoPlant.getDetails());

// Event handling
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("actionButton");
    button.addEventListener("click", function() {
        alert("Action performed on Tomato Man!");
    });
});