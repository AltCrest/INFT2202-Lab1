"use strict";

(() =>{
    // check if the user is already logged in
    if(sessionStorage.getItem("user"))
    {
    // redirect to the secure area
    loadHeader("task-list");
    loadContent("task-list", ActiveLinkCallBack("task-list"));
    }
})();
