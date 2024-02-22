/**
 * John Barrios(100821013), Nishan Shrestha(100892525)
 * app.js
 * INFT 2202
 * 02/02/24
 */

window.onload = function() {
    // Change Products link to Projects
    document.getElementById("products").innerHTML = "<a class='nav-link' href='#' id='Projects'><span class='fa fa-th'></span> Projects</a>";

    // added human resources between About Us and Contact Us
    document.getElementsByTagName("li")[3].innerHTML = "<a class='nav-link' href='#'><span class='fa fa-info'></span> About Us</a> <li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-users'></span> Human Resources</a></li>";
    
    // added a fixed bottom from copyright text
    document.getElementsByTagName("body")[0].innerHTML += "<nav class='navbar fixed-bottom navbar-light bg-dark' id='footer'><p>&copy; CopyRight 2024</p></nav>"
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
class Contact
{
    constructor(username = "", password = "", firstname = "", lastname = "", email = "")
    {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
}

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    let contactObject = new Contact();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
       PageSwitcher();   

        Main();
    }

    function PageSwitcher()
    {
        let name = window.location.pathname;

        let pageName = name.substring(1, name.length - 5);

        switch(pageName)
            {
                case "index":
                DisplayHomePageContent();
                    break;
                case "contact":
                    DisplayContactContent();
                    break;
                case "login":
                    DisplayLoginContent();
                    break;
                case "register":
                    DisplayRegisterContent();
                    break;
                default:
                    console.error("Landed in a page that is not defined");
                    break;
            }

            // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    function DisplayHomePageContent()
    {
        var navbar = document.querySelector(".navbar");
        navbar.insertAdjacentHTML('afterend', '<div><h2>Welcome To the Page</h2></div>');
    }

    function DisplayContactContent()
    {

    }
    /**
     * display content and functions for contact page
     */
    function DisplayLoginContent()
    {
        function ValidateInput(selector, condition, errorMessage) {
            if (condition) {
                // if failed
                $("#errorMessage").show();
                $("#errorMessage").text(errorMessage);
                $(selector).select();
                $(selector).css("border", "2px solid red");
            } else {
                $('#errorMessage').hide();
                $(selector).css("border", "1px solid green");
            }
        }

        $("#username").blur((e)=>
        {
            validateInput("#username", ($("#username").val().length > 20), "Contact name is too long")
        });

        $("#username").focus((e)=>
        {
            $("#username").select();
        });

        $("#login").click((e)=>
        {
            e.preventDefault();
            let username = $("#username").val();

            let newUsername = `<li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-users'></span> ${username}</a></li>`;
            $("#contactUs").after(newUsername);
            clearForm();
        });

    }
 
    function DisplayRegisterContent() {
        let errorDiv = '<div class="noError" id="errorMessage"></div>';
        $('h2').after(errorDiv);
        // Add event listener for input fields
        $('#FirstName, #LastName').on('input', function() {
            // Get input values
            const FirstName = $('#FirstName').val();
            const LastName = $('#LastName').val();
    
            // Check if input length is less than 2
            if (FirstName.length < 2 || LastName.length < 2) {
                // Display error message
                $('#ErrorMessage').text('First Name and Last Name must be at least 2 characters long.');
                $('#ErrorMessage').show();
            } else {
                // Hide error message
                $('#ErrorMessage').hide();
            }
        });
    }
    

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

