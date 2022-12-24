const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('Speech recognition started');
};

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  console.log(`Speech recognized: ${transcript}`);
  sendRequest(transcript);
};

const sendRequest = (message) => {
  // Set up the request body
  const body = {
    message: message
  };

  // Send the POST request
  fetch('http://localhost:3000/chatgpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then((response) => {
      // Handle the response
      console.log(response);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};

function askChatGPT() {
  recognition.start();
}
