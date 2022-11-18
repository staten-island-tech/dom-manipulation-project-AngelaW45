const DOMSelectors = {
  submitForm: document.querySelector("form"),
  text: document.querySelector("#text"),
  box: document.getElementById("song"),
  input: document.querySelector(`text`),
  displaySection: document.getElementById("display"),
  Album: document.getElementById("title"),
  Artist: document.getElementById("artist"),
  URL: document.getElementById("url"),
};

function clearfields() {
  DOMSelectors.Album.value = "";
  DOMSelectors.Artist.value = "";
  DOMSelectors.url.value = "";
}

DOMSelectors.submitForm.addEventListener("submit", function (event) {
  let Album = DOMSelectors.Album.value;
  let Artist = DOMSelectors.Artist.value;
  let URL = DOMSelectors.URL.value;

  event.preventDefault();

  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
    <h2 class="display-album">${Album}</h2>
    <h3 class="display-artist">${Artist}</h3>
      <img class="display-img"
        src="${URL}"
      />
      <button class="remove-btn">Remove Album</button>
    </div>`
  );
  clearfields();
});

/* DOMSelectors.submit.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
}); */

/* DOMSelectors.submit.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event);
});
 */

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
