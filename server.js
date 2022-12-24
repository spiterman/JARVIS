const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cors = require('cors');
const say = require('say');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('static'));

app.post('/chatgpt', (req, res) => {

  const prompt = req.body.message;
  console.log(prompt)

  const response = openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 1000,
    temperature: 0,
  }).then((gptres, err) => {
    let speech = gptres.data.choices[0].text;
    console.log(speech);
    say.speak(speech, null, 1.0, (err) => {
      console.log(err)
    })
      res.send(speech)
  });

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
