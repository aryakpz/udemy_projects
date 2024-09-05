
const num=document.querySelectorAll('.num span')  
const counter=document.querySelector('.main')   
const final=document.querySelector('.final')
const replay=document.querySelector('#replay')

 anim()
 
 function anim(){
    num.forEach((num,index) =>{
        // console.log(num ,index)
        const next=num.length -1

        num.addEventListener('animationend',(e) =>{
            if(e.animationName === 'goin' && index !== next){
                num.classList.remove('in')
                num.classList.add('out')

            }
            else if(e.animationName === 'goout' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
                
            }
            else{
                counter.classList.add('hide')
                final.classList.add('show')

            }
        })
    })
 }
