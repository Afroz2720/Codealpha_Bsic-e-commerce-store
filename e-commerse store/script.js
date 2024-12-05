// Simple cart array to hold cart items
let cart = [];

// Add product to cart
function addToCart(productId) {
  const productName = document.querySelector(`.product[data-id="${productId}"] h3`).innerText;
  const productPrice = document.querySelector(`.product[data-id="${productId}"] p`).innerText;

  cart.push({ id: productId, name: productName, price: productPrice });

  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.price}`;
    cartItems.appendChild(li);
  });
}

// Follow a user
function followUser(username) {
  alert(`You are now following ${username}!`);
}

// Like a post
function likePost(postId) {
  alert(`You liked post ${postId}!`);
}

// Comment on a post
function commentOnPost(postId) {
  const comment = prompt('Enter your comment:');
  if (comment) {
    alert(`You commented on post ${postId}: ${comment}`);
  }
}
