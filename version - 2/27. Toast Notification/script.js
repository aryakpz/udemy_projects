
const show=document.querySelector('.show')
const item=document.querySelector('.item')

const lists=["Message One","Message Two","Message Three","Message Four"]

const color=["success","warning","error"]


show.addEventListener('click',()=>create())



function create(){

    const message=document.createElement('div')
    message.classList.add('list')
    message.classList.add(clr())
    message.innerHTML=text()

    item.appendChild(message)
    setTimeout(()=>{
    message.remove()

    },3000)

}


function text(){
    return lists[Math.floor(Math.random()*lists.length)]
    
}

function clr(){
    return color[Math.floor(Math.random()*color.length)]
}