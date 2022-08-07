import MessageService from "./message-service.js";

let userID = "didntThinkIWouldGetThisFar";
const messageService = new MessageService();

window.addEventListener("load", function() {
    this.document.getElementById("greeting").innerHTML = `Wassup ${userID}!`;
    messageService.getAllMessages();
});