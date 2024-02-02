/**
 * John Barrios(100821013)
 * app.js
 * 02/02/24
 */

window.onload = function() {
    // display a welcome page to the website
    var navbar = document.querySelector(".navbar");
    navbar.insertAdjacentHTML('afterend', '<div><h2>Welcome To the Page</h2></div>');

    // Change Products link to Projects
    document.getElementById("products").innerHTML = "<a class='nav-link' href='#' id='Projects'><span class='fa fa-th'></span> Projects</a>";

    // added human resources between About Us and Contact Us
    document.getElementsByTagName("li")[3].innerHTML = "<a class='nav-link' href='#'><span class='fa fa-info'></span> About Us</a> <li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-users'></span> Human Resources</a></li>";
    
    // added a fixed bottom from copyright text
    document.getElementsByTagName("body")[0].innerHTML += "<nav class='navbar fixed-bottom navbar-light bg-light'><p>&copy; CopyRight 2024</p></nav>"
}

/**
 * Handles the submission of click event
 * @param {Event} event 
 */
function submitClick(event) {
    // prevent default submission
    event.preventDefault();

    // Get user input values
    const name = document.getElementById("name").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const email = document.getElementById("email").value;
    const msg = document.getElementById("message").value;

    // Log user information to console
    console.log(`Name: ${name}\ncontactNumber: ${contactNumber}\nEmail: ${email}\nUser Message: ${msg}`);

    // Start a timer then redirect to HomePage after 3 seconds
    setTimeout(() => {
        window.location.href = "index.html"; 
    }, 3000);
}