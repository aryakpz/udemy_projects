// const btn =document.querySelectorAll('.click')

// btn.forEach(bt=>{

// bt.addEventListener('click',function(e){

//     const x=e.pageX
//     const y=e.pageY
//     console.log(x,y)

//     const buttonTop = e.target.offsetTop
//     const buttonLeft = e.target.offsetLeft

//     const xInside = x - buttonLeft
//     const yInside = y - buttonTop

//     const circle=document.createElement('span')

//     circle.classList.add('circle')
//     circle.style.top = yInside + 'px'
//     circle.style.left = xInside + 'px'

//     this.appendChild(circle)

//     setTimeout(()=>circle.remove(),500)
    
// })
// })       



const btn =document.querySelector('.click')

btn.addEventListener('click',function(e){

    const x=e.pageX
    const y=e.pageY

    const top= e.target.offsetTop
    const left=  e.target.offsetLeft

    const xin=x- e.target.offsetLeft
    const yin=y-e.target.offsetTop


    

    const c=document.createElement('span')
    c.classList.add('circle')

    c.style.top=yin +'px'
    c.style.left=xin + 'px'

    btn.appendChild(c)

    setTimeout(() => c.remove(),500)
    
})            




          