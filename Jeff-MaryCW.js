console.log("Team JS Linked");
// Get reference variables for elements & verify selections
let userName = document.getElementById("nameInput");
console.log(userName);
let userEmail = document.getElementById("emailInput");
console.log(userEmail);
let userMessage = document.getElementById("messageInput");
console.log(userMessage);
let userSubmitButton = document.getElementById("button");
console.log(userSubmitButton);
let userStoredData = { YourName: "", YourEmail: "", Message: "", };
// *******************************************************************************************
// Function Declaration to Alert User of Information Submitted
let sendInfo = (userclick) => {
    console.log("Function Called");
    alert(`Your Name: ${userName.value}\nYour Email: ${userEmail.value}\nMessage: ${userMessage.value}`);
    class userStoredData {
        constructor(userName, userEmail, userMessage) {
            this.userName = userName;
            this.userEmail = userEmail;
            this.userMessage = userMessage;
        }
    }
}
new userStoredData1(userName, userEmail, userMessage);
console.log(`Your Name:${this.userName}\n:Your Email:${this.userEmail}\nMessage:${this.userMessage}`);
userSubmitButton.addEventListener("click", sendInfo);
