function updateOptions() {
    const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
    const optionGroup = document.getElementById('optionGroup');
    const propertyGroup = document.getElementById('propertyGroup');

    if (serviceType === '1') {
      optionGroup.style.display = 'none';
      propertyGroup.style.display = 'none';
    } else if (serviceType === '2') {
      optionGroup.style.display = 'block';
      propertyGroup.style.display = 'none';
    } else if (serviceType === '3') {
      optionGroup.style.display = 'none';
      propertyGroup.style.display = 'block';
    }
  }

  function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
    let totalPrice = 0;

    if (serviceType === '1') {
      totalPrice = 10 * quantity;  // Пример цены для типа 1
    } else if (serviceType === '2') {
      const optionPrice = parseFloat(document.getElementById('option').value);
      totalPrice = (10 + optionPrice) * quantity;  // Пример цены для типа 2
    } else if (serviceType === '3') {
      const propertyChecked = document.getElementById('property').checked;
      const propertyPrice = propertyChecked ? 3 : 0;
      totalPrice = (10 + propertyPrice) * quantity;  // Пример цены для типа 3
    }

    document.getElementById('totalPrice').innerHTML = `Общая стоимость заказа: ${totalPrice} у.е.`;
  }