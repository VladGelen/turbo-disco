// Открытие попапа
function openPopup() {
    document.getElementById("popup").style.display = "flex";
    // Добавление записи в историю браузера
    history.pushState({ page: "popup" }, "Форма обратной связи", "?popup");
}

// Закрытие попапа
function closePopup() {
    document.getElementById("popup").style.display = "none";
    // Заменяем текущую запись в истории, чтобы изменить URL
    history.replaceState({ page: "main" }, "Главная", "/");
}

// Отправка формы
function submitForm() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var organization = document.getElementById("organization").value;
    var message = document.getElementById("message").value;
    var consent = document.getElementById("consent").checked;

    var xhr = new XMLHttpRequest();
    var url = "YOUR_FORMCARRY_URL"; // Замените на URL своей формы из formcarry.com
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                document.getElementById("statusMessage").innerText = "Форма успешно отправлена!";
                document.getElementById("feedbackForm").reset();
            } else {
                document.getElementById("statusMessage").innerText = "Ошибка отправки формы. Пожалуйста, попробуйте еще раз.";
            }
        }
    };

    var data = "fullName=" + encodeURIComponent(fullName) +
               "&email=" + encodeURIComponent(email) +
               "&phone=" + encodeURIComponent(phone) +
               "&organization=" + encodeURIComponent(organization) +
               "&message=" + encodeURIComponent(message) +
               "&consent=" + consent;

    xhr.send(data);
}

// Обработка события нажатия "Назад" в браузере
window.onpopstate = function (event) {
    if (event.state && event.state.page === "popup") {
        openPopup();
    } else {
        closePopup();
    }
};

// Восстановление последних введенных значений из LocalStorage
document.addEventListener("DOMContentLoaded", function () {
    var formFields = ["fullName", "email", "phone", "organization", "message", "consent"];

    formFields.forEach(function (field) {
        var storedValue = localStorage.getItem(field);
        if (storedValue) {
            document.getElementById(field).value = storedValue;
        }
    });
});

// Сохранение значений в LocalStorage при изменении полей формы
document.getElementById("feedbackForm").addEventListener("input", function (event) {
    localStorage.setItem(event.target.id, event.target.value);
});