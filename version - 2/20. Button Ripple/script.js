     
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




          