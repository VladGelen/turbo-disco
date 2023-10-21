window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");

  let b = document.getElementById("my-button");
  b.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Рассчитываем стоимость");
    calculateTotal();
  });

  function calculateTotal() {
    const productPrice = parseInt(document.getElementById("product").value);
    const quantity = parseInt(document.getElementById("quantity").value);
    if (quantity < 0) {
      alert("Количество не может быть отрицательным.");
      return;
    }
    const totalPrice = productPrice * quantity;

    document.getElementById("totalPrice").innerHTML = "Общая стоимость заказа: $" + totalPrice;
  }
});