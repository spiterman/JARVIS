# Turning ChatGPT into J.A.R.V.I.S

<div style="width:100%;height:0;padding-bottom:54%;position:relative;"><iframe src="https://giphy.com/embed/g4sCZhKykg1z2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/iron-man-robert-downey-jr-g4sCZhKykg1z2">via GIPHY</a></p>

I've always wanted a personal assistant like Tony Stark's JARVIS.

A voice activated AI that could understand your questions and respond back to you using natural language.
Now with ChatGPT and its API we're one step closer to that becoming a reality.

This is my first project playing around with this tech and it essentially runs a server that lets you click a button and talk into your computer and hear a response back from ChatGPT.

The next step for this would be to have it run on an Alexa or Google Home and to make its voice sound like Paul Bettany's.

To run:

1. Run `npm install`.
2. Go to https://beta.openai.com/account/api-keys and generate an API key.
3. Create a `.env` file in the root directory and add a line that looks like `OPENAI_API_KEY=YOUR_API_KEY` where YOUR_API_KEY is the key you just generated.
4. You'll need a paid account or to be using the free trial since querying the API isn't free.
4. Start the server by running `node server.js`.
5. Open a Chrome browser window at http://localhost:3000/


# Appendix

Some info about pricing and documentation on the OpenAI Node.js API.

https://beta.openai.com/docs/api-reference/completions/create?lang=node.js

https://openai.com/api/pricing/
