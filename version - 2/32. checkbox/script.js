
const main=document.querySelectorAll('.sec .main')
main.forEach(item =>{
    item.addEventListener('click',()=>{
        item.classList.toggle('active')
    })
})