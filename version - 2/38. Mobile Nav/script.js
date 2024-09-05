
const nav = document.querySelectorAll('.sec')
const mobile = document.querySelector('.mobile')

nav.forEach(icon => {
    icon.addEventListener('click', () => {
     
        remove()
        icon.classList.add('active')
        console.log(icon.className)
        if (icon.className === 'sec work active') {
            work()
        }
        if (icon.className === 'sec blog active') {
            blog()
        }
        if (icon.className === 'sec about active') {
            about()
        }
        if (icon.className === 'sec home active') {
            home()
        }
        
    })
  
})
home()

function work() {
    mobile.style.background = 'url("work.jpeg")'

}
function blog() {
    mobile.style.background = 'url("blog.jpeg")'

}
function about() {
    mobile.style.background = 'url("about.jpeg")'

}
function home() {
    mobile.style.background = 'url("images.jpeg")'

}

function remove() {

    const sec = document.querySelectorAll('.sec')
    sec.forEach(icon => {
        icon.classList.remove('active')
    })
}