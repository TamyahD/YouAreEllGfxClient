import MessageService from "./message-service.js";

let userID = "didntThinkIWouldGetThisFar";
const messageService = new MessageService(userID);

window.addEventListener("load", function() {
    document.getElementById("greeting").innerHTML = `Wassup ${userID}!`;
    messageService.getAllMessages()
        .then(successfulCallback, errorCallback);

    function successfulCallback(response) {
        // console.log(response);
        populateThread(response);
    }

    function errorCallback(response) {
        console.log(response);
    }
});

function populateThread(messages) {
    messages.forEach(message => {
        const messageListItem = document.createElement("LI");
        const userIDHeading = document.createElement("h3");
        const messageParagraph = document.createElement("p");

        const messageContent = document.createTextNode(message.message);
        const userIDContent = document.createTextNode(message.fromID);

        userIDHeading.appendChild(userIDContent);
        messageParagraph.appendChild(messageContent);
        messageListItem
            .appendChild(userIDHeading)
            .appendChild(messageParagraph);
        document.getElementById("message-list").appendChild(messageListItem);
    })
}