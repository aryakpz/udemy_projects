const main = document.querySelectorAll('.main')
const sec = document.querySelectorAll('.sec')


sec.forEach(s => {
    s.addEventListener('mouseover', () => {
        console.log(s.className)
        remove()
        s.classList.add('active')
    })

})


function remove() {
    sec.forEach(s => {
        s.classList.remove('active')
    })
}
   


