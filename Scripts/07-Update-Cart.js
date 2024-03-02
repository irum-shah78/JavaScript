let cartQuantity = 0;

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
      console.log(`Cart Quantity: ${cartQuantity}`);

    }