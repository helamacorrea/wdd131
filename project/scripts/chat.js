// Chat things

const sendButton = document.querySelector('#sendButton');
let userInput = document.querySelector('#userInput');
const footer = document.querySelector('footer');
const main = document.querySelector('main');

const chatBox = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
    sendMessage();
});

function sendMessage() {
    const message = userInput.value;
    if (message !== '') {
        displayMessage('user', message);
        userInput.value = '';
        displayMessage('ai', "Hi there! Landzy AI is launching soon — your smart assistant for finding the perfect property. 🚀 Get ready for instant answers, visit scheduling, and more. Don’t miss out! 😁");
        userInput.focus();
        if (chatBox.scrollHeight > chatBox.clientHeight) {
            window.scrollTo(0, footer.scrollHeight - 120);
        }
        else {
            console.log('ELSE')
        }
    };
}


function displayMessage(sender, text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    
    const formattedText = text
        .replace(/\n/g, '<br>')
        .replace(/\*(.*?)\*/g, '<strong>$1</strong>'); 
    
    msgDiv.innerHTML = formattedText;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage(); 
    }
});


