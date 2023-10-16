function calculateTotal() {
    const productPrice = parseFloat(document.getElementById('product').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const totalPrice = productPrice * quantity;

    document.getElementById('totalPrice').innerHTML = `Общая стоимость заказа: $${totalPrice}`;
  }