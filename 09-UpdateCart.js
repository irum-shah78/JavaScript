let cartQuantity = 0;
displayQuantity();

function updateCartQuantity(quantity) {
  if (cartQuantity + quantity > 10) {
    //console.log('The Cart is Full!');
    alert('The Cart is Full!');
    return;
  }
  if (cartQuantity + quantity < 0) {
    //console.log('No enough Items Available!');
    alert('No enough Items Available!');
    return;
  }
  cartQuantity += quantity;
  displayQuantity()
}

function displayQuantity() {
  document.querySelector('.cart').innerHTML = `Cart Quantity: ${cartQuantity}`;
}