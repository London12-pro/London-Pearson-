// JavaScript for interactive web pages

// 1. Descriptive variable names and distinct data types
let totalPrice = 0;   // Integer: stores the total price of items
let isUserLoggedIn = false;  // Boolean: stores whether the user is logged in

// 2. Mathematical Operation: Adding prices
let itemPrice1 = 69.99;
let itemPrice2 = 79.99;
totalPrice = itemPrice1 + itemPrice2;  // Total price calculation

// 3. Decision Making: Using 'if' statement
if (isUserLoggedIn) {
    console.log("Welcome back, user!"); // If user is logged in
} else {
    console.log("Please log in to continue.");
} 

// 4. Logical Operators for Complex Condition Evaluation
let hasDiscount = true;
let isSaleActive = false;

// Checking if either discount is available OR sale is active
if (hasDiscount || isSaleActive) {
    console.log("You are eligible for a discount or sale.");
} else {
    console.log("No discounts or sales available.");
}

// 5. Showcase JavaScript Output Techniques
// Output to the console
console.log("Total Price: $" + totalPrice);

// Output to the browser screen
let priceElement = document.createElement("p");
priceElement.textContent = "Total Price: $" + totalPrice;
document.body.appendChild(priceElement);

// Display message for the logged-in user
let messageElement = document.createElement("p");
if (isUserLoggedIn) {
    messageElement.textContent = "Welcome back, enjoy shopping!";
} else {
    messageElement.textContent = "Please log in to start shopping.";
}
document.body.appendChild(messageElement);
