const sub=document.querySelectorAll('.box')

window.addEventListener('scroll',move)

function move(){
    const btn=window.innerHeight /5*4

    sub.forEach(box=>{
        const topl=box.getBoundingClientRect().top
  
        if(topl < btn)
            {
                box.classList.add(box)
            }
            else{
                box.classList.remove(box)
            }
 
    })  
}
 

