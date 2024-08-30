
// const btn = document.querySelector('.btn')
// const main = document.querySelector('.main')

// const hr = document.querySelector('.h')
// const min = document.querySelector('.m')
// const sec = document.querySelector('.s')
// const date = document.querySelector('.date')
// const day = document.querySelector('.day')
// const time = document.querySelector('.time')

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// console.log(hr, min, sec, date, day, time)
// btn.addEventListener('click', () => {
//     main.classList.toggle('dark')

// })       

// function settime() {

//     const time = new Date();
//     const monthel = time.getMonth();
//     const dayel = time.getDay();
//     const hourel = time.getHours();
//     const minel = time.getMinutes();
//     const secel = time.getSeconds();
//     const clocktime = hourel % 12;       

//     // console.log(time)

//     // hr.style.transform = `translate(-50% -100%)rotate(30deg)`

//     hr.style.transform = `translate(-50%, -100%) rotate(${scale(clocktime, 0, 12, 0, 360)}deg)`
//     min.style.transform = `translate(-50%, -100%) rotate(${scale(min, 0, 60, 0, 360)}deg)`
//     sec.style.transform = `translate(-50%, -100%) rotate(${scale(sec, 0, 60, 0, 360)}deg)`

//     // time.innerHTML = `${clocktime}:${min < 10 ? `0${min}` : min}`

//     // date.innerHTML = `${days[day]}, ${months[monthel]} <span class="time">${date}</span>`

// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//     return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
// }

// settime();

// setInterval(settime,1000);



const hourEl = document.querySelector('.h')
const minuteEl = document.querySelector('.m')
const secondEl = document.querySelector('.s')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const main = document.querySelector('.main')
const btn = document.querySelector('.btn')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

btn.addEventListener('click', (e) => {
    btn.addEventListener('click', () => {
        main.classList.toggle('dark')

    })

})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()
   
setInterval(setTime, 1000)