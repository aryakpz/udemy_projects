
const count=document.querySelector('.count')
const img=document.querySelector('.main')

const inc= setInterval(update,20)           
let t=0
function update()
{
    t++
   count.innerHTML=t+'%'
   if(t>=100)
    {
        clearInterval(inc)

    }
    count.style.opacity=.7-(t/100);
    img.style.filter='blur('+ ( 70-t) +'px)'
    
}

            