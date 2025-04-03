document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const errorMessage = document.getElementById('errorMessage');
    const loginForm = document.getElementById('loginForm');
    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const storedUsers = localStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            errorMessage.textContent = 'Username already exists.';
            return;
        }
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        errorMessage.textContent = '';
        window.location.href = 'new-collection.html';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            loginErrorMessage.textContent = '';
            window.location.href = 'new-collection.html';
        } else {
            loginErrorMessage.textContent = 'Invalid username or password.';
        }
    });

    // Add to Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.dataset.name;
            const itemPrice = parseFloat(this.dataset.price);
            const item = { name: itemName, price: itemPrice, quantity: 1 };
            const existingItem = cart.find(cartItem => cartItem.name === itemName);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push(item);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.href = 'cart.html';
        });
    });
});
