const bodyEl = document.body;
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop');
let timerId = null;


btnStartEl.addEventListener('click', onClick)
btnStopEl.addEventListener('click', offClick)

function onClick(){
  btnStartEl.disabled = true;
timerId = setInterval(()=>{
  bodyEl.style.background = getRandomHexColor();
}, 1000)
}
function offClick(){
  btnStartEl.disabled = false;
  clearInterval(timerId)
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}