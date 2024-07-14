


  // Function to retrieve user data from localStorage
  function loadUserData() {
    let userName = localStorage.getItem("Name");
    let userEmail = localStorage.getItem("Email");
    let userPhone = localStorage.getItem("Phone");
    let userGender = localStorage.getItem("Gender");

    let nameElement = document.getElementById("user__name");
    let emailElement = document.getElementById("user__email");
    let phoneElement = document.getElementById("user__phone");
    let genderElement = document.getElementById("user__gender");
    let logoutButton = document.getElementById("logoutButton");

    // Check if all elements are found
    if (nameElement && emailElement && phoneElement && genderElement && logoutButton) {
        // Set the text content of the elements with the user data
        nameElement.textContent = userName || "N/A";
        emailElement.textContent = userEmail || "N/A";
        phoneElement.textContent = userPhone || "N/A";
        genderElement.textContent = userGender || "N/A";

        // Add click event listener to the logout button
        logoutButton.addEventListener("click", function() {
            // Clear user data from localStorage
            localStorage.removeItem("Name");
            localStorage.removeItem("Email");
            localStorage.removeItem("Phone");
            localStorage.removeItem("Gender");
            // Redirect to index.html or login page
            window.location.href = "index.html";
        });
      } else {
          console.error("One or more elements with the specified IDs were not found in the document.");
      }
  }

  // Call the function to load user data initially
  loadUserData();

  // Listen for changes in localStorage due to registration
  window.addEventListener("storage", function(e) {
      if (e.key === "users") {
          // Reload user data if 'users' key changes in localStorage
          loadUserData();
      }
  });
   // Attach logout event listener to logout button
   const logoutButton = document.getElementById("logoutButton");
   if (logoutButton) {
       logoutButton.addEventListener("click", logout);
   } else {
       console.error("Logout button not found.");
   }


function logout() {
    localStorage.removeItem('isLoggedIn');
       localStorage.removeItem('first_name');
       localStorage.removeItem('last_name');
       localStorage.removeItem('email');
       localStorage.removeItem('phone');
       localStorage.removeItem('gender');

       localStorage.removeItem('isLoggedIn');
       window.location.href = 'Login.html';
   }



