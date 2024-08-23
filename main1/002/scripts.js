const prevel = document.getElementById('prev')
const nextel = document.getElementById('next')
const progress = document.querySelector('.progress')

const countel = document.querySelectorAll('.count')

let current = 1

nextel.addEventListener('click', () => {

    // console.log(current)
    current++

    if (current > countel.length) {
        current = countel.length
    }


    update()

})

prevel.addEventListener('click', () => {

    //   console.log(current)
    current--
    if (current < 1) {
        current = 0
    }
    update()
})  




function update() {
    countel.forEach((count, index) => {
        if (index < current) {
            count.classList.add('active')

        }

        else {
            count.classList.remove('active')

        }
    })

const act=document.querySelectorAll('.active')
progress.style.width=((act.length -1)/(countel.length -1)*100+'%')
// progress.style.width =((act.length +.5 )/(countel.length + .5))*100+'%'
}