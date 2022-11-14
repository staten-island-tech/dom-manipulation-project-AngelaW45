const DOMSelectors = {
  submit: document.querySelector(".btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("song"),
};

DOMSelectors.submit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
});

/* function backgroundAndText(background, text) {
  background.style.backgroundColor = "pink";
  text.textContent = "This is now a pink background";
} */

/* DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
}); */

/* const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("song"),
  input: document.querySelector(`btn`),
}; */

/* DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
});
 */
