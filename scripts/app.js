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

}

function submitClick() {

    
}