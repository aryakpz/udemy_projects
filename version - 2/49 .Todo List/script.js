
const input = document.querySelector('input')

const display = document.querySelector('.display')

input.addEventListener('input', (e) => {
    
    console.log(e.target.value)

    input.addEventListener('keydown', () => {

        const im = document.createElement('div')
        im.classList.add('box')
        im.innerHTML = e.target.value
        display.appendChild(im)

    })
})
