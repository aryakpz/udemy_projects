

const image = document.querySelector('.image')
const time = document.querySelector('#times')

let count = 0
image.addEventListener('click',(e) => {

    count++
    time.innerHTML = count

    const heart=document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX;
    const y = e.clientY;

    const left=e.target.offsetLeft
    const top=e.target.offsetTop

    const xin=x-left
    const yin=y-top

    console.log(xin,yin)
    heart.style.left=`${xin}px`
    heart.style.top=`${yin}px`
    
    image.appendChild(heart) 

})    
      
