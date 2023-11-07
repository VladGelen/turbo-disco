const form = document.getElementById('form');
const radio = document.getElementById('radio');
const tovar1 = document.getElementById('tovar1');
const tovar2 = document.getElementById('tovar2');
const tovar3 = document.getElementById('tovar3');

FormChangeHandler();

form.addEventListener('change', getFormValue);
radio.addEventListener('change', FormChangeHandler);

function FormChangeHandler() {
    if (tovar1.checked) {
        document.getElementById('Select').hidden = true;
        document.getElementById('checkbox').hidden = true;
    } else if (tovar2.checked) {
        document.getElementById('Select').hidden = false;
        document.getElementById('checkbox').hidden = true;
    } else if (tovar3.checked) {
        document.getElementById('Select').hidden = true;
        document.getElementById('checkbox').hidden = false;
    }
};

function getFormValue(event) {
    event.preventDefault();
    const Number = form.querySelector('[name ="number"]');
    const ProductType = form.querySelector('[name ="productType"]');
    const Result = form.querySelector('[name ="result"]');
    const CheckBox = form.querySelector('[name ="checkbox"]');
    
    if (tovar1.checked) {
        Result.value = (Number.value * 30) + "$";
    } else if (tovar2.checked) {
        if (ProductType.value === 'new') Result.value = (500 * Number.value * 1.5) + "$";
        else if (ProductType.value === 'used') Result.value = (500 * Number.value * 0.9) + "$";
        else if (ProductType.value === 'showcase') Result.value = (500 * Number.value * 1.2) + "$";
        else Result.value = 'Выберите тип';
    } else if (tovar3.checked) {
        if (CheckBox.checked) Result.value = (Number.value * 80 + 20) + "$";
        else Result.value = (Number.value * 80) + "$";
    }
};