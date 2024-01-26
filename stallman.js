function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var num = getRandomInt(6);
const auth = " ~ Richard Stallman"




const quotes = [
  "I did write some code in Java once, but that was the island in Indonesia.",
  "Facebook is not your friend, it is a surveillance engine.",
  "Sharing is good, and with digital technology, sharing is easy.",
  "Open source is a development methodology; free software is a social movement.",
  "Proprietary software is an injustice.",
  "Value your freedom or you will lose it, teaches history."];

document.getElementById("stallman").innerHTML = quotes[num] + auth;
