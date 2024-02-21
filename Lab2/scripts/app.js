/**
 * John Barrios(100821013), Nishan Shrestha(100892525)
 * app.js
 * INFT 2202
 * 02/02/24
 */

window.onload = function() {
    // display a welcome page to the website

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
    constructor(contactName = "", emailAddress = "", contactNumber = "", contactMessage = "")
    {
        this.contactName = contactName;
        this.emailAddress = emailAddress;
        this.contactNumber = contactNumber;
        this.contactMessage = contactMessage;
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
     * display content and finctions for contact page
     */
    function DisplayLoginContent()
    {
        function clearForm()
        {
            //document.getElementById("contactForm").reset();
            $("#contactForm")[0].reset();
            $('#errorMessage').hide();
        }
        
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

        $("#contactName").change((e)=>
        {
            if( $("#contactName").length < 8)
            {
                console.log("Contact Name Too Short");
            }
            console.log("changed");
        });

        $("#contactName").blur((e)=>
        {
            validateInput("#contactName", ($("#contactName").val().length < 8), "Contact name is too short")
        });

        $("#contactName").focus((e)=>
        {
            $("#contactName").select();
        });

        $("#emailAddress").blur((e) => {
            validateInput("#emailAddress", ($("#emailAddress").val().length < 8 ||(!$("#emailAddress").include("@"))), "Invalid Email Address")
        })

        $("#emailAddress").focus((e)=>
        {
            $("#emailAddress").select();
        });

        $("#contactNumber").blur((e) => {
            let phoneNumberPatter = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
            let phoneNumber = $("#contactNumber").val();

            validateInput("#contactNumber", (!phoneNumberPatter.test(phoneNumber)), "Invalid number, please use the pattern (999)-999-9999");
        })

        $("#contactNumber").focus((e)=>
        {
            $("#contactNumber").select();
        });

        $("#contactMessage").blur((e) => {
            validateInput("#contactMessage", ($("#contactMessage").val().length < 2), "Message is to short");
        })

        $("#contactMessage").focus((e)=>
        {
            $("#contactMessage").select();
        });

        $("#contactForm").submit((e)=>
        {
            if (document.getElementById("contactForm").checkValidity() == false) {
                e.preventDefault();
            }
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });
        $("#submitButton").click((e)=>
        {
            e.preventDefault();
            let contactName = $("#contactName").val();
            let emailAddress = $("#emailAddress").val();
            let contactNumber = $("#contactNumber").val();
            let contactMessage = $("#contactMessage").val();

            console.log(`Contact Name: ${contactName}`);
            console.log(`Email Address: ${emailAddress}`);
            console.log(`Contact Number: ${contactNumber}`);
            console.log(`Contact Message: ${contactMessage}`);

            contactObject.contactName = contactName;
            contactObject.emailAddress = emailAddress;
            contactObject.contactNumber = contactNumber;
            contactObject.contactMessage = contactMessage;

            console.log(contactObject);

            clearForm();
        });

        $("#resetButton").click((e)=>
        {
            e.preventDefault();
            if(confirm("Are You Sure?"))
            {
                clearForm();
            }

            
        });
    }

    function DisplayRegisterContent()
    {

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

