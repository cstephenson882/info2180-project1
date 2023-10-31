/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function(event) {
    var submit_Btn = document.querySelector(".newsletter button");
    var issubcribed_Message = document.querySelector(".message");

    // Listener for the click on the submit button
    submit_Btn.addEventListener("click",function(event){
    
        var email_ = document.querySelector("#email");
        // let last_val = lastIndexOf(Array.from(email_));
    
        event.preventDefault();
        if (email_.value.includes('@')){
            issubcribed_Message.textContent  = `Thank you! Your email address ${email_.value} has been added to our mailing list!`;
            email_.value = '';
        }
        else {
            issubcribed_Message.textContent = "Please enter a valid email address.";
            isValid_email = 0;
        }
        
        
    });
    
});