document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example hardcoded credentials check
    if (username === 'admin' && password === 'admin123') {
        // Redirect to admin dashboard
        window.location.href = 'admin_dashboard.html';
    } else if (username === "employee" && password === "employeepass") {
               window.location.href = "request_form.html";}
    else {
        alert('Invalid login credentials');
    }
});



document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login SuccessFully!!!!!');
});


document.getElementById('travelRequestForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Form elements
    const empId = document.getElementById('empId');
    const empName = document.getElementById('empName');
    const project = document.getElementById('project');
    const cause = document.getElementById('cause');
    const source = document.getElementById('source');
    const destination = document.getElementById('destination');
    const fromDate = document.getElementById('fromDate');
    const noOfDays = document.getElementById('noOfDays');
    const arrivalDate = document.getElementById('arrivalDate');
    const modeOfTravel = document.getElementById('modeOfTravel');

    // Validation
    if (empId.value === "" || empName.value === "" || project.value === "" || cause.value === "" || 
        source.value === "" || destination.value === "" || fromDate.value === "" || 
        noOfDays.value === "" || arrivalDate.value === "" || modeOfTravel.value === "") {
        
        alert("Please fill out all fields!");
        return;
    }

    // Check if arrival date is after the 'from date'
    if (new Date(arrivalDate.value) < new Date(fromDate.value)) {
        alert("Arrival date cannot be before the From date.");
        return;
    }

    // Check if number of days is valid
    if (noOfDays.value <= 0) {
        alert("Number of days must be greater than 0.");
        return;
    }

    alert("Form submitted successfully!");
    // You can proceed to submit the form data to your server here.
});




// document.getElementById("loginForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
    
//     // Mock login check
//     if (username === "admin" && password === "adminpass") {
//         window.location.href = "admin_dashboard.html";
//     } else if (username === "employee" && password === "employeepass") {
//         window.location.href = "user_dashboard.html";
//     } else {
//         alert("Invalid credentials");
//     }
// });
