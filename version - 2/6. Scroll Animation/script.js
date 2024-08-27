
const subel=document.querySelectorAll('.box')


window.addEventListener('scroll',move)

    // move()
    function move(){
        const btn=window.innerHeight / 5*4
        subel.forEach(box=>{
            const  boxtop=box.getBoundingClientRect().top
            console.log(window.innerHeight)

            if(boxtop < btn) 
                {
                    box.classList.add('active')
                }
                else{
                    box.classList.remove('active')
                }
        })
    }

                                                                                                                                                                                                                  
           