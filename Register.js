function saveData(event) {
    event.preventDefault();  // Prevent form from submitting

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let phone = document.getElementById("phone").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user_records = JSON.parse(localStorage.getItem("users")) || [];

    if (user_records.some((user) => user.email === email)) {
        alert("This email already exists");
        window.location.href = "loginRegister.html";
    } else if (user_records.some((user) => user.phone === phone)) {
        alert("This mobile phone number already exists");
        window.location.href = "loginRegister.html";
    } else {
        user_records.push({
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "gender": gender,
            "phone": phone,
            "password": password
        });
        localStorage.setItem("users", JSON.stringify(user_records));
        alert("Registration successful!");
        toggle();

        // Mark the user as logged in
        localStorage.setItem("isLoggedIn", "true");
        //window.location.href = "home.html"; // Redirect to home page after registration
    }
}
