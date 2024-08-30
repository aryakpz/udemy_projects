const small = document.querySelectorAll('.cup.small')

const liter = document.getElementById('liters')
const per = document.getElementById('percentage')
const remi = document.getElementById('remained')


const maincup=document.getElementById('.sub')
let p = 200

small.forEach((cup,index) => {

    cup.addEventListener('click',() => fillcup(index))
})


    function fillcup(index){

        if (index===7 && small[index].classList.contains("full"))
           {  
            index--;
        }
        else if(small[index].classList.contains('full') && !small[index].nextElementSibling.classList.contains('full')) 
            {
            index--
           }

        small.forEach((cup,index1) =>{

        if(index1<= index)
            {

        cup.classList.add('full')
            }

        else{
            cup.classList.remove('full')
        }
        
    })
    update()

    }                 


    function update(){
        const full=document.querySelectorAll('.cup.small.full').length

        const totalcup=small.length
         console.log(per)
        if(full === 0)
            {
                per.style.visibility='hidden'
                per.style.height=0
            }
        else{
            per.style.visibility='visible'
            per.style.height=`${full/totalcup *300}px`
            per.innerHTML=`${full /totalcup * 100}%`
        }
        

        if(full ==totalcup){
            remi.style.visibility='hidden'
            remi.style.height=0
        }
        else{
            remi.style.visibility='visible'
            liter.innerHTML=`${ 2- (250 * full /1000 )}L`

        }
    }