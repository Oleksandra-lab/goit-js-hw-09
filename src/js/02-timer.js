import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dataInput = document.getElementById(datetime-picker);
const btnStart = document.querySelector('button[data-start]');
const daysLeft = document.querySelector('[data-days]')
const hoursLeft = document.querySelector('[data-hours]')
const minutesLeft = document.querySelector('[data-minutes]')
const secondsLeft = document.querySelector('[data-seconds]')

btnStart.addEventListener('click', startTimer)


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };




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
  