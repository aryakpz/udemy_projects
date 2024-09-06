const container=document.querySelector('.mainbox')
const btn=document.querySelector('.magic')

function create(){
 for(let i=0;i<4; i++){
    for(let j=0 ;j<4;j++){
        const box=document.createElement('div')
        box.classList.add('box')
        box.style.backgroundPosition = `${-j * 125}px ${ -i * 125}px `
        container.appendChild(box)
    }
  }
}

btn.addEventListener('click',()=>{
    container.classList.toggle('big')
 
})


create()