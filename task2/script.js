function validateForm(){

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let message=document.getElementById("message").value.trim();

    if(name===""){
        alert("Please enter your name.");
        return false;
    }

    if(email===""){
        alert("Please enter your email.");
        return false;
    }

    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email address.");
        return false;
    }

    if(message===""){
        alert("Please enter your message.");
        return false;
    }

    alert("Form submitted successfully!");

    return true;
}