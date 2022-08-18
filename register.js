// Registration Form
function RegistrationForm() {
  var name = 
      document.forms["RegForm"]["Name"];
  var email = 
      document.forms["RegForm"]["EMail"];
  var phone = 
      document.forms["RegForm"]["Telephone"];
  var what = 
      document.forms["RegForm"]["Subject"];
  var password = 
      document.forms["RegForm"]["Password"];
  var address = 
      document.forms["RegForm"]["Address"];

  if (name.value == "") {
      window.alert("Please enter your name.");
      name.focus();
      return false;
  }

  else if (address.value == "") {
      window.alert("Please enter your address.");
      address.focus();
      return false;
  }

  else if (email.value == "") {
      window.alert(
        "Please enter a valid e-mail address.");
      email.focus();
      return false;
  }

  else if (phone.value == "") {
      window.alert(
        "Please enter your telephone number.");
      phone.focus();
      return false;
  }

  else if (password.value == "") {
      window.alert("Please enter your password");
      password.focus();
      return false;
  }

  else if (what.selectedIndex < 1) {
      alert("Please enter your course.");
      what.focus();
      return false;
  }
  else {
    window.alert(
        "Thank you, we will be answering as soon as possible.");
    return window.reload(true);            
} 
}
function ContactForm() {
    var firstname = 
        document.forms["ContForm"]["firstname"];
    var lastname = 
        document.forms["ContForm"]["lastname"];
    var email = 
        document.forms["ContForm"]["email"];
    var subject = 
        document.forms["ContForm"]["subject"];
  
    if (firstname.value == "") {
        window.alert("Please enter your name.");
        firstname.focus();
        return false;
    }
  
    else if (lastname.value == "") {
        window.alert("Please enter your last name.");
        lastname.focus();
        return false;
    }
  
    else if (email.value == "") {
        window.alert(
          "Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
  
    else if (subject.value == "") {
        window.alert(
          "Please enter the subject you are inquiring.");
        subject.focus();
        return false;
    }
    else {
        window.alert(
            "Thank you, we will be answering as soon as possible.");
        return window.reload(true);            
    } 

  }
