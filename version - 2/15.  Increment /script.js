const counter=document.querySelectorAll('.sub h2')

counter.forEach(count=>{
    count.innerText=0
    const update=()=>{
        const target= + count.getAttribute('data-target')
        const c=+count.innerText
        const increment=target/200
        if(c<target){
            count.innerHTML=`${Math.ceil(c + increment)}`
            setTimeout(update,)
        }
        // console.log(increment)
        else{
            count.innerText=target
        }
    }
    update()
})