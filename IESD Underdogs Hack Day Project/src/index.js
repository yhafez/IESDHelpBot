import "./styles.css";
var $ = require("jquery");
const { WebClient } = require("@slack/web-api");

// Create a new instance of the WebClient class with the token read from your environment variable
const SLACK_TOKEN = "xoxb-975798810645-978001737222-IWCYsbKUb3zFgNxg0YIuJs21";

// TUTORIAL HERE: https://slack.dev/node-slack-sdk/getting-started
console.log("Getting started with Node Slack SDK");

const web = new WebClient(SLACK_TOKEN);

function postMessage(message, slackChannel) {
  try {
    web.chat.postMessage({
      channel: `#${slackChannel}`,
      text: `${message}`
    });
  } catch (error) {
    console.log(error);
  }
  console.log("Message sent!", message);
}

const language = ["Javascript", "C++", "C#", "Python", "Ruby on Rails"];

function createCards() {
  for (let i = 0; i < language.length; i++) {
    let langCard = $(`<section class='card'>
    <h3 class='language'>${language[i]}</h3>
    <label for='description'>Add a brief description of what you're looking for... </label>
    <input type="text" id='description'> </input>
  </section>`);

    $("main").append(langCard);
    console.log(langCard);
  }
}

createCards();
