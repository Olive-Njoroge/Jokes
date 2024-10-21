//import axios from "axios";

function generateJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
  });
}
let apiKey = "db36a36a2f66f8114f09od05493b24tc";
let prompt =
  "You're an AI who is well versed with dark humor and really incredible jokes. You tell relatable jokes that everyone finds funny.The jokes should be at most one line long and direct to the point.Start with the joke.Generate different jokes each time.Give one joke at a time.Do not repeat the same jokes. Also include dark jokes.";
let context = "Please generate short funny jokes.";
let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
axios.get(apiURL).then(generateJoke);

let button = document.querySelector("button");
button.addEventListener("click", generateJoke);
