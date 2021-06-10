"use strict";

let form = document.querySelector("form");

form.addEventListener("submit", createMeme);

function createMeme(e) {
  // save inputs to variables
  e.preventDefault();
  let img = document.querySelector(".img-url");
  console.log("Image URL is " + img.value);
  let top = document.querySelector("#top");
  //   console.log("Top value is " + top.value);
  let bot = document.querySelector("#bot");
  //   console.log("Bot value is " + bot.value);

  // create new div for meme
  let newMeme = document.createElement("div");
  newMeme.classList.add("meme");
  newMeme.style.backgroundColor = "black";
  console.log(newMeme.classList);

  // create new image using value from user input
  let newImg = document.createElement("img");
  newImg.src = img.value;

  // add image to meme div
  newMeme.appendChild(newImg);
  // console.log(newMeme);

  // create top & bot text using value from user input
  let topText = document.createElement("span");
  topText.textContent = top.value;
  topText.classList.add("top");
  let botText = document.createElement("span");
  botText.textContent = bot.value;
  botText.classList.add("bot");

  // add both text to meme div
  newMeme.appendChild(topText);
  newMeme.appendChild(botText);

  // add x close button
  let x = document.createElement("button");
  x.classList.add("x");
  x.textContent = "X";

  // add x close to meme div
  newMeme.appendChild(x);

  // add new meme to meme zone
  let memeZone = document.querySelector(".meme-zone");
  memeZone.appendChild(newMeme);

  // Clear input values
  img.value = "";
  bot.value = "";
  top.value = "";
}

document.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("x")) {
    let parent = e.target.parentNode;
    parent.remove();
  }
});
