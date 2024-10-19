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

inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "#3A3A3A";
    portofiloEl.style.backgroundColor = "#3A3A3A";
  } else {
    bodyEl.style.backgroundColor = "white";
    portofiloEl.style.backgroundColor = "white";
    
  }
}
inputEl.addEventListener("input", ()=> {
  updateBody();
  updateLocalStorage();
})
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}