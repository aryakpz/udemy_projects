
const bo=document.querySelectorAll('.sec .box')
bo.forEach(item =>{
    // console.log(item)
    img=item.querySelector('.ques .img')
 

    img.addEventListener('click',()=>{

    
    const q=item.querySelector('.ques')
    const a=item.querySelector('.ans')
   
    // console.log(q,a)


      const x=item.querySelector('.ques #x')
      const down=item.querySelector('.ques #down')
         
        // a.style.display=a.style.display==='flex'?'none':'flex'
        // x.style.display=x.style.display==='flex'?'none':'flex'
        // down.style.display=down.style.display==='none'?'flex':'none'
        // item.style.backgroundColor= item.style.backgroundColor==='white'?'Lightgrey':'white'

        // item.className=item.className==='box active'?'box': 'box active'
        item.classList.toggle('active')

    })

})
   