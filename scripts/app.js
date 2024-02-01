/**
 * John Barrios
 * app.js
 * 
 */

window.onload = function() {
    document.getElementsByTagName("body")[0].innerHTML += "<p>Welcome</p>";
    document.getElementById("products").innerHTML = "<a class='nav-link' href='#' id='products'><span class='fa fa-th'></span> Projects</a>";
    document.getElementsByTagName("li")[3].innerHTML = "<a class='nav-link' href='#'><span class='fa fa-info'></span> About Us</a> <li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-users'></span> Human Resources</a></li>";
    document.getElementsByTagName("body")[0].innerHTML += "<nav class='navbar fixed-bottom navbar-light bg-light'><p>&copy; CopyRight 2024</p></nav>"

    // let form = document.getElementById("name");
    // form.addEventListener("submit", (e) => {
    //     e.preventDefault();
    //     console.log("Form Submitted!");
    // })
}




// function getName(){
//     console.log(document.getElementsByID("name").innerText)
// }

function submitClick() {
    const form = document.getElementById("myForm");
 
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
 
        // Get user input values
        const name = document.getElementById("name").value;
        const contactNumber = document.getElementById("contactNumber").value;
 
        // Log user information to console
        console.log(`User submitted: Name: ${name}, contactNumber: ${contactNumber}`);
 
        // Start a timer to redirect after 3 seconds
        setTimeout(() => {
            window.location.href = "index.html"; // Replace with your home page URL
        }, 3000);
    });
    
}