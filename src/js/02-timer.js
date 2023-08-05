import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dataInputEl = document.getElementById("datetime-picker");
const btnStartEl = document.querySelector('button[data-start]');
const timerEl = document.querySelector('.timer')
const daysEl = timerEl.querySelector('[data-days]')
const hoursEl = timerEl.querySelector('[data-hours]')
const minutesEl = timerEl.querySelector('[data-minutes]')
const secondsEl = timerEl.querySelector('[data-seconds]')

btnStartEl.addEventListener('click', startTimer)
let intId = null;

function padStart(value){
  return value.toString().padStart(2, "0")

}

function startTimer(){
  clearInterval(intId)
let deltaTime = new Date(dataInputEl.value) - Date.now();
 intId = setInterval(()=>{
  deltaTime -= 1000;
  if(deltaTime < 1000){
    clearInterval(intId);
    updateTimer();
    return
  } 
  const date = convertMs(deltaTime)
  updateTimer(date)
}, 1000)
}
function updateTimer({ days = "00", hours = "00", minutes = "00", seconds = "00"} = {}){
  
  daysEl.textContent = padStart(days);
  hoursEl.textContent = padStart(hours);
  minutesEl.textContent = padStart(minutes);
  secondsEl.textContent = padStart(seconds);


}
btnStartEl.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDates]) {
      const toggle = selectedDates < Date.now()
      btnStartEl.disabled = toggle;
      if(toggle){
        return alert("Please choose a date in the future");
      }
    },
  };



flatpickr(dataInputEl, options)


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  