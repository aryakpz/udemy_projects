const numbers=document.querySelectorAll('.num')
let index =0
numbers[0].focus()


    numbers.forEach((item,index)=>{
        item.addEventListener('keydown',(e)=>{
            // item.classList.add('item')
            if(e.key >=0 && e.key <=9 ){
                setTimeout(() => {
                    numbers[index + 1].focus()
                }, 10);
              
            }
            else if(e.key === 'Backspace'){
                setTimeout(() => {
                     numbers[index -1].focus()
                },10);
            }
        })
    })  