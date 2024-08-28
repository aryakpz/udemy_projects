
const key=document.querySelector('.key')
const eventel=document.querySelector('.event')
const code=document.querySelector('.code')

document.addEventListener('keydown',(event)=>{

    key.innerHTML=event.key
    code.innerHTML=event.keyCode
    eventel.innerHTML=event.code
})                               