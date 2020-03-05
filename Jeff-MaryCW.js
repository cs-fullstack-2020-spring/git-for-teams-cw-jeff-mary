console.log("Team JS Linked");
// Get reference variables for elements & verify selections
let userName = document.getElementById("");
console.log(userName);
let userEmail = document.getElementById("");
console.log(userEmail);
let userMessage = document.getElementById("");
console.log(userMessage);
let userSubmitButton = document.getElementById("");
console.log(userSubmitButton);
// *******************************************************************************************
// Function Declaration to Alert User of Information Submitted
let sendInfo = (userclick) => {
    preventDefault;
    let userStoredData= [`
        Your Name:${userName.value} Your Email:${userEmail.value} Message:${userMessage.value}` 
    ];
    alert(`Your Name: ${userName.value}\nYour Email: ${userEmail.value}\nMessage: ${userMessage.value}`);
    console.log(`${userName.value}\n${userEmail.value}\n${userMessage.value}`);
    console.log(userStoredData);
}
userSubmitButton.addEventListener("click", sendInfo);
