

const images = document.querySelectorAll('.image img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const container = document.querySelector('.image')

let index = 0

let interval = setInterval(move, 2000)

function move() {
    index ++;
    change();
}   
      
function change() {   
     
    if (index > images.length - 1) {
        index = 0
    }   
    else if (index < 0) {
        index = images.length - 1
    }
 container.style.transform = `translateX(${-index * 500}px)`
               
}     
     
                        
function reset() {
    clearInterval(interval) 
    interval = setInterval(move, 2000)
}

    
prev.addEventListener('click', () => {
    index ++;
    change()
    reset()
   
})


next.addEventListener('click', () => {
    index --;
    change()
    reset()   

})  

  