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

function card(Album, Artist, URL) {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
    <h2 class="display-album">${Album}</h2>
    <h3 class="display-artist">${Artist}</h3>
      <img class="display-img"
        src="${URL}"
      />
      <br>
      <button class="remove-btn">Remove Album</button>
      </br>
    </div>`
  );
}

function clearfields() {
  DOMSelectors.Album.value = "";
  DOMSelectors.Artist.value = "";
  DOMSelectors.URL.value = "";
}

DOMSelectors.submitForm.addEventListener("submit", function (event) {
  let Album = DOMSelectors.Album.value;
  let Artist = DOMSelectors.Artist.value;
  let URL = DOMSelectors.URL.value;
  card(Album, Artist, URL);
  event.preventDefault();
  clearfields();

  let removebtn = document.querySelectorAll(".remove-btn");

  removebtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });
  });
});
