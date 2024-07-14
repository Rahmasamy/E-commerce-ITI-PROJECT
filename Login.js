
let container = document.getElementsByClassName('form-container')[0];

function toggle() {
    container.classList.toggle('sign-in');
    container.classList.toggle('sign-up');
}

setTimeout(() => {
    container.classList.add('sign-in');
}, 200);

function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if (val.indexOf(name) === 0) value = val.substring(name.length);
    });
    return value;
}

function setCookie(cName, cValue, expDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
    console.log(`Cookie set: ${cName}=${cValue}; ${expires}; path=/`);
}

function cookieMessage() {
    if (!getCookie("cookie")) {
        document.querySelector("#cookie").style.display = "block";
    }
}

function getLogin(event) {
    event.preventDefault();

    let email = document.getElementById("login_email").value;
    let password = document.getElementById("login_password").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        return;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    let user_record = JSON.parse(localStorage.getItem("users")) || [];

    let current_user = user_record.find(user => user.email === email && user.password === password);
    
    if (current_user) {
        localStorage.setItem("Name", current_user.first_name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        alert("Login successful!");
        window.location.href = "profile.html";
    } else {
        alert("Login failed!");
    }
}

document.getElementById('loginForm').addEventListener('submit', getLogin);
