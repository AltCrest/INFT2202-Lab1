/**
 * John Barrios(100821013), Nishan Shrestha(100892525)
 * app.js
 * INFT 2202
 * 02/22/24
 */

window.onload = function() {
    // Change Products link to Projects
    document.getElementById("products").innerHTML = "<a class='nav-link' href='#' id='Projects'><span class='fa fa-th'></span> Projects</a>";

    // added human resources between About Us and Contact Us
    document.getElementsByTagName("li")[3].innerHTML = "<a class='nav-link' href='#'><span class='fa fa-info'></span> About Us</a> <li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-users'></span> Human Resources</a></li>";
    
    // added a fixed bottom from copyright text
    document.getElementsByTagName("body")[0].innerHTML += "<nav class='navbar fixed-bottom navbar-light bg-dark' id='footer'><p>&copy; CopyRight 2024</p></nav>"
}

//----------------------- LAB 2 START ------------------------------------
// Create a user class with constructor to store new users.
class User
{
    constructor(password = "", firstname = "", lastname = "", email = "")
    {
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
    }
}

("use strict");
let app;
(function(app){

    // Declare Function Variables
    let userObject = new User();

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        PageSwitcher();   
        Main();
    }

    /**
     * run the IIFC on selected html links
     */
    function PageSwitcher()
    {
        let name = window.location.pathname;

        let pageName = name.substring(1, name.length - 5);

        switch(pageName)
            {
                case "Lab2/index":
                DisplayHomePageContent();
                    break;
                case "Lab2/contact":
                    DisplayContactContent();
                    break;
                case "Lab2/login":
                    DisplayLoginContent();
                    break;
                case "Lab2/register":
                    DisplayRegisterContent();
                    break;
                default:
                    console.error("Landed in a page that is not defined");
                    break;
            }

        // add a class of active to the active link
        $("#"+pageName).addClass("active");
    }

    /**
     * display content and functions for Home page
     */
    function DisplayHomePageContent()
    {
        let welcome = '<div><h2>Welcome To the Page</h2></div>';
        $("#mainNav").after(welcome);
    }

    /**
     * display content and functions for Contact page
     */
    function DisplayContactContent()
    {
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
                window.location.href = "Lab2/index.html"; 
            }, 3000);
        }
    }
    /**
     * display content and functions for Login page
     */
    function DisplayLoginContent()
    {
        // clear the form once called
        function clearForm()
        {
            $("#loginForm")[0].reset();
            $('#errorMessage').hide();
        }

        // validation for user input as well as error message handling
        function validateInput(selector, condition, errorMessage) {
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

        // added a div to place error messages
        let errorDiv = '<div id="errorMessage" class="alert alert-danger"></div>';
        $('h2').after(errorDiv);
        $("#errorMessage").hide();

        // Username validation
        $("#username").blur((e)=>
        {
            validateInput("#username", ($("#username").val().length > 20), "username is too long")
        });

        $("#username").focus((e)=>
        {
            $("#username").select();
        });

        // password validation
        $("#password").blur((e) => {
            validateInput("#password",($("#password").val().length < 6), "Invalid Password");
        });

        // handles login button click
        $("#login").click((e) => 
        {   
            // prevent default submission
            e.preventDefault();

            // add the user's username in between contact us and Log in
            let username = $("#username").val();
            let newUsername = `<li class='nav-item'><a class='nav-link' href='#'><span class='fa fa-user-circle'></span> ${username}</a></li>`;
            $("#contactUs").after(newUsername);

            clearForm();
        });
    };

    /**
     * display content and functions for Register page
     */
    function DisplayRegisterContent()
    {   
        // reset the form
        function clearForm()
        {
            $("#registerForm")[0].reset();
            $('#errorMessage').hide();
        }
        
        // validate user input and update error messages
        function validateInput(selector, condition, errorMessage) {
            if (condition) {
              $("#errorMessage").show();
              $("#errorMessage").text(errorMessage);
              $(selector).select();
              $(selector).css("border", "2px solid red");
            } else {
              $('#errorMessage').hide();
              $(selector).css("border", "1px solid green"); 
            }
          }

        // create a div to display error messages
        let errorDiv = '<div id="errorMessage" class="alert alert-danger"></div>';
        $('h2').after(errorDiv);
        $("#errorMessage").hide();

        // validate firstname field
        $("#firstname").blur((e)=>
        {
            validateInput("#firstname", ($("#firstname").val().length < 2), "Firstname is too short")
        });

        $("#firstname").focus((e) => {
            $("#firstname").select();
        });
        
        // validate lastname field
        $("#lastname").blur((e)=>
        {
            validateInput("#lastname", ($("#lastname").val().length < 2), "Lastname is too short")
        });

        $("#lastname").focus((e)=>
        {
            $("#lastname").select();
        });

        // validate email field
        $("#email").blur((e) => {
            validateInput("#email",($("#email").val().length < 8) || (!$("#email").val().includes("@")),"Invalid Email Address");
        });
        
        $("#email").focus((e)=> {
            $("#email").select();
        });
        
        // validate password field
        $("#password").blur((e) => {
            validateInput("#password",($("#password").val().length < 6), "Invalid Password");
        });

        $("#password").focus((e)=>
        {
            $("#password").select();
        });

        // make sures that both passwords are the same
        $("#confPassword").blur((e) => {
            validateInput("#confPassword", ($("#confPassword").val() !== $("#password").val()), "Confirm that the passwords are the same")
        });
        
        // handles the register button click
        $("#register").click((e)=>
        {
            // prevent default submission
            e.preventDefault();

            // gathers the values form the fields
            let firstname = $("#firstname").val();
            let lastname = $("#lastname").val();
            let email = $("#email").val();
            let password = $("#password").val();

            // log user information in User object
            userObject.firstname = firstname;
            userObject.lastname = lastname;
            userObject.email = email;
            userObject.password = password;

            // log info on console
            console.log(userObject);
            
            clearForm();
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

