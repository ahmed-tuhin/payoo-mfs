// step-1: set the event handler
document.getElementById("login-btn").addEventListener("click", function (event) {
  // step-2: prevent default behavior (reloading browser)
    event.preventDefault();

    // step-3: get the phone number and the pin number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber,pinNumber);

    //step-4: validate phone and pin
    //  this is temporary . you should not do this
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are log in');
       window.location.href = '/home.html';
    }
    else(
        alert('Wrong phone number or pin')
    )

    
    
});
