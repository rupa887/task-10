const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton= document.querySelector("#check");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

//array of available notes
const availableNotes=[2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    if (!isNaN(billAmount.value))
    {
        hideMessage();
        //for checking a numeric value
        if(billAmount.value > 0)
        {
            // checking if the bill amount is greaer than zer0
            hideMessage();
            if(cashGiven.value >= billAmount.value)
            {
                hideMessage();
                // checking if the cash given is more than bill amount
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
            }
            else
            {
                showMessage("The cash given is less than bill amount");
            }
        }
        else{
            showMessage("Invalid bill amount");
        }
    }
    else{
        console.log(typeof (billAmount));
        showMessage("enter a valid number");
    }

});

function hideMessage(){
    message.style.display="none";
}

function calculateChange(amountToBeReturned){
    // go over all the available notes
    for (let i=0; i < availableNotes.length; i++){
        
        //no of notes required for each denominations
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
            );
        
            //left over amount
        amountToBeReturned %= availableNotes[i];

        //updating the number of notes in the table for the current amount
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}