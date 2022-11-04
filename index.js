const DOMSelectors = {
  butten: document.getElementById("btn"),
  text: document.querySelector("#text"),
  background: document.getElementById("background"),
};

function backgroundAndText(background, text) {
  text.innerHTML = "This is now a pink background";
}

console.log(DOMSelectors);
