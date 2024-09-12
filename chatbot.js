// Predefined bot responses with text and optional image URLs
const botResponses = {
    "hello": {
        text: "Hi there! How can I assist you today?"
    },
    "hi": {
        text: "Hello! How can I help you?"
    },
    "how are you": {
        text: "I'm just a bot, but I'm functioning properly! How about you?"
    },
    "what is your name": {
        text: "I'm ShopAssist, your virtual shopping assistant."
    },
    "view products": {
        text: "Here are some featured products!",
        image: "https://via.placeholder.com/300x200?text=Product+1"
    },
    "check orders": {
        text: "Please provide your order number to check the status of your order."
    },
    "help": {
        text: "I can assist you with viewing products, checking orders, and contacting support."
    },
    "contact support": {
        text: "Our support team is available 24/7. You can reach out via email at support@shopsphere.com."
    },
    "bye": {
        text: "Goodbye! Have a great day!"
    },
    "default": {
        text: "Sorry, I didn't understand that. Could you rephrase?"
    }
};

// Function to send the user's message and get a response from the bot
function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim().toLowerCase();
    
    if (!userInput) return;  // If input is empty, don't send

    displayMessage(userInput, "user");  // Display user message
    document.getElementById('userInput').value = '';  // Clear the input field

    // Simulate bot response after 1 second delay
    setTimeout(() => {
        const botReply = getBotResponse(userInput);
        displayMessage(botReply.text, "chatbot", botReply.image);  // Display bot message with optional image
    }, 1000);
}

// Function to display a message in the chatbox (with optional image)
function displayMessage(text, sender, imageUrl = null) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chatarea-inner', sender);
    messageElement.textContent = text;

    // If there's an image URL, add an image element below the text
    if (imageUrl) {
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        messageElement.appendChild(imageElement);
    }

    // Append message to chatbox and auto-scroll
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to determine the bot's response based on user input
function getBotResponse(input) {
    return botResponses[input] || botResponses["default"];
}

// Function to handle predefined messages from button clicks
function predefinedMessage(message) {
    const lowerCaseMessage = message.toLowerCase();
    displayMessage(message, "user");

    setTimeout(() => {
        const botReply = getBotResponse(lowerCaseMessage);
        displayMessage(botReply.text, "chatbot", botReply.image);
    }, 1000);
}
