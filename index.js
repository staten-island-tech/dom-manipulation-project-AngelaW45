const DOMSelectors = {
  submit: document.querySelector(".btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("song"),
  input: document.querySelector(`text`),
  displaySection: document.getElementById("display"),
};

DOMSelectors.submit.addEventListener("click", function () {
  let Album = document.getElementById("title").value;
  console.log(Album);

  let Artist = document.getElementById("artist").value;
  console.log(Artist);

  let URL = document.getElementById("url").value;
  console.log(URL);

  DOMSelectors.submit.addEventListener("click", function (event) {
    event.preventDefault();

  DOMSelectors.displaySection.insertAdjacentHTML(
    <div class="display-card">
      <img
        class="display-img"
        src="https://www.gannett-cdn.com/presto/2019/08/08/USAT/dc1fe9c6-d585-42c4-9c69-e31cc46e4c94-ABBEY_ROAD.JPG?auto=webp&crop=1481,834,x0,y265&format=pjpg&width=1200"
      />
      <h2 class="display-artist">Beatles</h2>
      <h3 class="display-album">Abbey Road</h3>
      <button class="remove btn">Remove Album</button>
    </div>
  );
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
