
const btn = document.querySelector('.btn')
const emoji = document.querySelectorAll('.sec')
const reply = document.querySelector('.reply')
const main = document.querySelector('.main')

emoji.forEach(item => {
    item.addEventListener('click', () => {

        remove()
        item.classList.add('active')
        btn.addEventListener('click',()=>{
             main.classList.add('active')
            create(item.textContent)
    
        })
       
    })
})



function remove(){
    emoji.forEach(item =>{
      
    item.classList.remove('active')

    })
}

function create(item) {

    const reaction = document.createElement('div')
    reaction.classList.add('reaction')
    reaction.innerHTML = `
   
    <div class="reaction">
        <h2>Thanks for your Reaction ❤️ </h2>
        <p class="type">Type : <p class="rec">${item}</p></p>
    </div>
    `
    reply.appendChild(reaction)
}