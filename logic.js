// logic.js

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if item already exists
  const existing = cart.find(item => item.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-container');
  const totalDiv = document.getElementById('cart-total');

  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = `<p>Your cart is empty. Start adding some items!</p>`;
    totalDiv.textContent = '';
    return;
  }

  cart.forEach(item => {
    const quantity = parseInt(item.quantity) || 1;
    const itemTotal = item.price * quantity;
    total += itemTotal;

    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.innerHTML = `
      <strong>${item.name}</strong><br>
      Price: $${item.price.toFixed(2)}<br>
      Quantity: ${quantity}<br>
      Subtotal: $${itemTotal.toFixed(2)}
    `;
    container.appendChild(itemDiv);
  });

  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

// 🔓 LOGIN CHECK REMOVED

function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}

// 🛒 CART FUNCTIONS
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, itemPrice) {
  const existing = cart.find(item => item.name === itemName);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.innerText = cartCount;
}

function viewCart() {
  window.location.href = 'cart.html';
}

// 🍰 CATEGORY FILTER
function filterCategory(category) {
  const items = document.querySelectorAll('#menu-items .col-md-3');

  items.forEach(item => {
    if (category === 'all' || item.classList.contains(`category-${category}`)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

  const tabs = document.querySelectorAll('#category-tabs .nav-link');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.textContent.toLowerCase() === category || 
        (category === 'all' && tab.textContent === 'All')) {
      tab.classList.add('active');
    }
  });
}

// Initialize on load
window.onload = function () {
  updateCartCount();
};
function signup() {
  window.location.href = "signup.html";
}

function getCartItemCount() {
  try {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart contents:', cart); // Debug line
    return cart.reduce((total, item) => {
      const quantity = Number(item.quantity) || 0;
      return total + quantity;
    }, 0);
  } catch (e) {
    console.error('Error reading cart:', e);
    return 0;
  }
}

localStorage.removeItem('cartItems'); // If that's the key you used
let cart1 = [];
updateCartCount(); // make sure to call this after initializing
