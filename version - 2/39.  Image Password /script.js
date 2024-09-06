const password=document.querySelector('.password')
const back=document.querySelector('.mainbody')

let len = 0
password.addEventListener('input',(e)=>{
    
    const length =e.target.value.length
    const blur=20 - length *2
    back.style.filter=`blur(${blur}px)`
    // console.log()
    
})