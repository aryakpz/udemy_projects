const container = document.querySelector('.container')
const url = 'https://source.unsplash.com/random/'

for(let i = 0; i < 5; i++) {
    for(let j= 0; j < 3; j++){
    const img = document.createElement('img')
    img.src = `${url}${getsize()}`
    container.appendChild(img)
}
}

function getsize() {
    return `${getrandom()}x${getrandom()}`
}

function getrandom() {
    return Math.floor(Math.random() * 10) + 300
}