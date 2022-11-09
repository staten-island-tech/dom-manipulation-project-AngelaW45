const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("background"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "pink";
  text.textContent = "This is now a pink background";
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});
