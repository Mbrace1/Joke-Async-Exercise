// const fetch = require('isomorphic-fetch')
const jokeURL = 'https://v2.jokeapi.dev/joke/Any?safe-mode'


const jokeRevealElement = document.getElementById("jokeGoesHere")
const jokeSetupElement = document.getElementById("jokeSetup")
const getNewJokeElement = document.getElementById("getNewJoke")
const revealJokeAnswerElement = document.getElementById("revealJokeAnswer")

async function getJoke() {
    jokeGoesHere.classList.add("revealJoke")
    const response = await fetch(jokeURL)
    const data = await response.json()
    console.log(data)

    if ("joke" in data) {
        jokeSetupElement.innerHTML = data.joke
        jokeRevealElement.innerHTML = ""
    } else {
        jokeSetupElement.innerHTML = data.setup
        jokeRevealElement.innerHTML = data.delivery
    }
}

const revealJoke = () => {
    jokeGoesHere.classList.remove("revealJoke")
}

getJoke()
jokeGoesHere.classList.add("revealJoke")

getNewJokeElement.addEventListener("click", getJoke)
revealJokeAnswerElement.addEventListener("click", revealJoke)
module.exports = fetchJokes