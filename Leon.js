const introText = document.querySelector(".landing .intro-text");
const intro = ["Hello There", "Hope You Enjoy Here", ""];
let introIndex = 0;
let charaIndex = 0;
updateText();
function updateText () {
  charaIndex++
  introText.innerHTML = `<h1>${intro[introIndex].slice(0, charaIndex)}</h1>`;
  if (charaIndex === intro[introIndex].length) {
    introIndex++;
    charaIndex = 0;
  }
  setTimeout(updateText,200);
} 
// toggle-button

const inputEl = document.querySelector("input");
const bodyEl = document.querySelector("body");
const portofiloEl = document.querySelector(".portofilo");
const landingEl = document.querySelector(".landing");
const featuresEl = document.querySelector(".features");
const contactEl = document.querySelector(".contact");
const cardEl = document.querySelector(".card-image");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "#3A3A3A";
    portofiloEl.style.backgroundColor = "#3A3A3A";
    landingEl.style.backgroundColor = "#3A3A3A";
    featuresEl.style.backgroundColor = "#3A3A3A";
    contactEl.style.backgroundColor = "#3A3A3A";
    cardEl.style.backgroundColor = "#3A3A3A";
  } 
  else
  {
    bodyEl.style.backgroundColor = "white";
    portofiloEl.style.backgroundColor = "#f6f6f6";
    landingEl.style.backgroundColor = "white";
    featuresEl.style.backgroundColor = "white";
    contactEl.style.backgroundColor = "#f6f6f6";
    cardEl.style.backgroundColor = "white";
    
  }
}
inputEl.addEventListener("input", ()=> {
  updateBody();
  updateLocalStorage();
})
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}