document.addEventListener('DOMContentLoaded', function () {
    const openFormButton = document.getElementById('openFormButton');
    const popup = document.getElementById('popup');
    const feedbackForm = document.getElementById('feedbackForm');
    const submitFormButton = document.getElementById('submitFormButton');
    const messageContainer = document.getElementById('messageContainer');

    
    const storedFormValues = JSON.parse(localStorage.getItem('formValues')) || {};
    for (const key in storedFormValues) {
        if (Object.hasOwnProperty.call(storedFormValues, key)) {
            const inputElement = document.getElementById(key);
            if (inputElement) {
                inputElement.value = storedFormValues[key];
            }
        }
    }

    openFormButton.addEventListener('click', function () {
        popup.style.display = 'block';
        history.pushState({ formOpen: true }, null, '#form');
    });

    window.addEventListener('popstate', function (event) {
        if (event.state === null || !event.state.formOpen) {
            popup.style.display = 'none';
            window.location.replace(window.location.origin + window.location.pathname);
        }
    });

    window.addEventListener('beforeunload', function (event) {
        event.preventDefault();
        popup.style.display = 'none';
        window.location.replace(window.location.origin + window.location.pathname);
    });

    submitFormButton.addEventListener('click', function () {

        if (!feedbackForm.checkValidity()) {
            messageContainer.textContent = 'Пожалуйста, заполните все обязательные поля и установите чекбокс. Проверьте, чтобы в поле телефона были только цифры';
            return;
        }

        
        const formData = new FormData(feedbackForm);

        
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });
        localStorage.setItem('formValues', JSON.stringify(formValues));

        
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://formcarry.com/s/7K-Ixu_vxd', true);

        xhr.setRequestHeader('Accept', 'application/json');

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                messageContainer.textContent = 'Форма успешно отправлена!';

                feedbackForm.reset();
                localStorage.removeItem('formValues');
                popup.style.display = 'none';
                window.location.href = window.location.origin + window.location.pathname;
            } else {
                messageContainer.textContent = 'Ошибка при отправке формы. Пожалуйста, повторите попытку.';
            }
        };

        xhr.onerror = function () {
            messageContainer.textContent = 'Ошибка при отправке формы. Пожалуйста, повторите попытку.';
        };

        xhr.send(formData);
    });
});