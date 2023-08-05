import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onSubmit)

function onSubmit(evt){
  evt.preventDefault();
  const {amount, delay, step} = evt.target.elements
  const amountValue = Number(amount.value)
  let delayValue = Number(delay.value)
  const stepValue = Number(step.value)
  for (let i = 0; i < amountValue; i +=1){
createPromise(i +1, delayValue)
.then(({position, delay})=>{ Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);})
.catch(({position, delay})=>{ Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);})
delayValue += stepValue
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      if (shouldResolve) {
        res({position, delay})
      } else {
        rej({position, delay})
      }
    },delay 
    )
  })
}
