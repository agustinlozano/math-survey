document.querySelector('#submit').onclick = function (event) {
    event.preventDefault();
    validateForm();
}

function validateForm() {
    const userName = document.querySelector('#name').value;
    const userEmail = document.querySelector('#email').value;
    const userAge = document.querySelector('#number').value;
    validarNombre(userName);
    validarEmail(userEmail);
    validarEdad(userAge);
}

function validarNombre(userName) {
    if (/^[a-zÀ-ÿ\u00f1 ]+$/i.test(userName)) {
        hideError('name');
        hideErrorMessage('name-error');
        return '';
    } else {
        showErrorBorder('name');
        showErrorMessage('name-error');
        return false;
    }
}

function validarEmail(userEmail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
        hideError('email');
        hideErrorMessage('email-error');
        return '';
    } else {
        showErrorBorder('email');
        showErrorMessage('email-error');
        return false;
    }
}

function validarEdad(userAge) {
    if (userAge >= 1 && userAge <= 120) {
        hideError('number');
        hideErrorMessage('age-error');
        return '';
    } else {
        showErrorBorder('number');
        showErrorMessage('age-error');
        return false;
    }
}

function showErrorBorder(idName) {
    const nodeWithError = document.querySelector(`#${idName}`);
    nodeWithError.className = 'error';
}

function hideError(idName) {
    const nodeWithoutError = document.querySelector(`#${idName}`);
    nodeWithoutError.className = '';
}

function showErrorMessage(idName) {
    const paragraphError = document.querySelector(`#${idName}`);
    paragraphError.className = '';
}

function hideErrorMessage(idName) {
    const paragraphError = document.querySelector(`#${idName}`);
    paragraphError.className = 'hide';
}
