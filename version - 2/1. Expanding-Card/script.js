
const main=document.querySelectorAll('.card')
main.forEach(card=>{
    card.addEventListener('click',()=>{
        remove()
        card.classList.add('active')
    })
})

function remove(){
     main.forEach(card=>{
        card.classList.remove('active')
     })
}       

    






