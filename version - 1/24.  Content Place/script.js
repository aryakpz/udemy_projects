


const h2=document.querySelector('.subdata h2')
const p1=document.querySelector('.subdata p')
const h4=document.querySelector('.namepart h4')
const p2=document.querySelector('.namepart p')
const topimg=document.querySelector('.image')
const bottomimg=document.querySelector('.im')
const bg=document.querySelectorAll('.animated')
const text=document.querySelectorAll('.text')

setTimeout(display,2500)

function display()
{
h2.innerHTML="Lorem ipsum dolor sit amel"
p1.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicingelit.Dolore perferendis"
h4.innerHTML="John Doe"
p2.innerHTML="Oct 08,2020"
topimg.innerHTML=`<img src="Untitled.jpeg">`
bottomimg.innerHTML=` <img src="pic.jpeg">`
bg.forEach((item)=>item.classList.remove('animated'))
text.forEach((item)=>item.classList.remove('text'))

}

 







