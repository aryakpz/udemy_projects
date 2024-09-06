const open=document.querySelector('.openbtn')
const close=document.querySelector('.closebtn')
const nav=document.querySelectorAll('.nav')

open.addEventListener('click',()=>{
    nav.forEach(item =>item.classList.add('visible'))
})
close.addEventListener('click',()=>{
    nav.forEach(item =>item.classList.remove('visible'))
})