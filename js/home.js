// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault()
    
    // step-2: get  add money to be added to the account and get the pin number
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);
    
    //  get the pin number
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(pinNumber);

})