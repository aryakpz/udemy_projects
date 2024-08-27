const main=document.querySelector('.main')
const menu=document.querySelector('.menu')
const bar=document.querySelector('.icon')
const circle=document.querySelector('.circle')

circle.addEventListener('click',()=>{

    main.style.transform= main.style.transform==='rotate(-20deg)'?'rotate(0)':'rotate(-20deg)';
   
    // menu.style.transition=menu.style.transition==='transform 5s'?'transform 3s':'transform 5s';
    circle.style.transform= circle.style.transform==='rotate(93deg)'?'rotate(0deg)':'rotate(93deg)';
    circle.style.transform='scale 1px';
    // menu.style.transform=menu.style.transform==='translateX(100deg)'?'translateX(0deg)':'translateX(100deg)';
    menu.classList.toggle('active');
});
 
    

                       