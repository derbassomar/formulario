function nameValidate() {
    let name = document.getElementsByClassName('input')[0].value;
    let spanName = document.getElementsByClassName('span-required')[0];
    if (name.length < 3) {
        spanName.style.display = 'block';
    } else {
        spanName.style.display = 'none';
    }
}

function emailValidate() {
    let email = document.getElementsByClassName('input')[1].value;
    let spanEmail = document.getElementsByClassName('span-required')[1];
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!re.test(email)) {
        spanEmail.style.display = 'block';
    } else {
        spanEmail.style.display = 'none';
    }
}

function mainPasswordValidate() {
    let password = document.getElementsByClassName('input')[2].value;
    let spanPassword = document.getElementsByClassName('span-required')[2];
    if (password.length < 8) {
        spanPassword.style.display = 'block';
    } else {
        spanPassword.style.display = 'none';
    }
}