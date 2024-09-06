
const btn = document.querySelector('.btn')
const label = document.querySelector('.label')
let p = 0;
btn.addEventListener('mouseover', () => {

    if (p < 100) {
        p = p + 1
        console.log(p)
        btn.style.transform = `translate(${p * 3}px)`
        label.textContent = p
    }
             
})  


