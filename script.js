// Messages for each emoji
const messages = {
    emoji1: "I'm really sorry for the way I acted. I truly regret it, and I hope you can forgive me. You mean the world to me. 💜",
    emoji2: "I made a mistake, and I need you to know I’m truly sorry. I care for you so much and never want to hurt you. Please forgive me. 💖",
    emoji3: "I love you more than words can express.You’re such an important part of my life, and I just want to make things right. 🌸",
};

// Emoji click handlers
document.getElementById('emoji1').addEventListener('click', () => {
    displayMessage(messages.emoji1);
});

document.getElementById('emoji2').addEventListener('click', () => {
    displayMessage(messages.emoji2);
});

document.getElementById('emoji3').addEventListener('click', () => {
    displayMessage(messages.emoji3);
});
// Function to display the message
function displayMessage(message) {
    const messageBox = document.getElementById('message');
    messageBox.innerHTML = `<p>${message}</p>`;
    messageBox.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Slightly lighter background when a message is shown
}
