function calculate(){
    if (document.querySelector('input[name="Program"]:checked') == null) {
        alert("Please complete your order");
    }
    else {
    var fee = 0;
    var Program = document.querySelector('input[name="Program"]:checked').value;
   
    if(Program =='Computer Science and Mathematics'){
      fee = 1350 + 22 + 90;
      if(document.querySelector('[name="book"]:checked') != null) {
        fee = fee += 100;
      }
    }
    else if(Program =='Health Science'){
      fee = 1295 + 22 + 90;
      if(document.querySelector('[name="book"]:checked') != null) {
        fee = fee += 120;
      }
    }
    else if(Program =='Internet & Digital Marketing'){
      fee = 1820 + 22 + 90;
      if(document.querySelector('[name="book"]:checked') != null) {
        fee = fee + 150;
      }
    }
    else if (Program =='Office Systems & Accounting (Payroll)') {
      fee = 950 + 22 + 90;
      if(document.querySelector('[name="book"]:checked') != null) {
        fee = fee += 135;
      }
    }
    if(document.querySelector('[name="taxes"]:checked') != null) {
      document.getElementById("fee").setAttribute('value', '$' + (fee * 1.15));
    }
    else {
      document.getElementById("fee").setAttribute('value', '$' + fee);    
    } 
} 
  }