document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Добивање вредности од формулар
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      // Принтање вредности во конзола
      console.log("First Name: " + firstName);
      console.log("Last Name: " + lastName);
      console.log("Email: " + email);
      console.log("Password: " + password);
    });
  });
