
// const screen = document.querySelectorAll('.screen')
// const choose = document.querySelectorAll('.choose')
// const start = document.getElementById('start')
// const container = document.querySelector('.container')
// const time = document.querySelector('.time')
// const score = document.querySelector('.score')
// const message = document.querySelector('.message')
// let seconds= 0;
// let scr = 0
// let select = {}

// start.addEventListener('click', () => screen[0].classList.add('up'))
// choose.forEach(bnt => {
//     bnt.addEventListener('click', () => {
//         const img = btn.querySelector('img')
//         const src = img.getAttribute('src')
//         const alt = img.getAttribute('alt')
//         select = { src, alt }
//         screen[1].classList.add('up')
//         setTimeout(create, 1000)
//         starts()
//     })
// })
// function starts() {
//     setInterval(increase, 1000)
// }
// function increase() {
//     let m = Math.floor(seconds / 60)
//     let s = seconds % 60
//     m = m < 10 ? `0${m}` : m
//     s = s < 10 ? `0${s}` : s
//     time.innerHTML = `Time : ${m} :${s}`
//     seconds++
// }
// function create() {
//     const insect = document.createElement("div")
//     insect.classList.add('insect')
//     const { x, y } = getrandom()
//     insect.style.top = `${y}px`
//     insect.style.left = `${x}px`
//     insect.innerHTML = `<img src="${select.src}" style="transform :rotate ($Math.random()* 360}deg)"/>`
//     insect.addEventListener('click', catchins)
//     container.appendChild(insect)
// }
// function getrandom() {
//     const width = window.innerWidth
//     const heigh = window.innerHeight
//     const x = Math.random() * (width - 200) + 100
//     const y = Math.random() * (heigh - 200) + 100
//     return{x,y}
// }
// function catchins(){
//     increase()
//     this.classList.add('caught')
//     setTimeout(()=>this.remove(),2000)
//     addins()
// }
// function addins(){
//     setTimeout(create,1000)
//     setTimeout(create,1500)
// }
// function increase(){
//     scr ++
//     if(scr >19){
//         message.classList.add('visible')
//     }
//     score.innerHTML=`score :${score}`
// }

const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_insect = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}