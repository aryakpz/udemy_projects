
// const drag = document.querySelector('.active')

// const box = document.querySelectorAll('.box')


// drag.addEventListener('dragstart', dragStart)
// drag.addEventListener('dragend', dragEnd)




// box.forEach(item => {
//     item.addEventListener('dragover', dragOver)
//     item.addEventListener('dragenter', dragEnter)
//     item.addEventListener('dragleave', dragLeave)
//     item.addEventListener('drop', dragDrop)
// })


// function dragStart() {    
//     this.className += 'hold'
//     setTimeout(() => this.className = 'invisible', 0)
    
// }
             

// function dragEnd() {   
//     this.className = 'active'
//     // console.log("end")
// }

// function dragOver(e) {
//     // console.log("over")
//     e.preventDefault()
   
// }   
               
// function dragEnter(e) {
// //     console.log("enter")

//     e.preventDefault()
//     this.className += 'hover'       
// }

// function dragLeave() {
//     // console.log("leave")

//     this.className = 'box'
// }

// function dragDrop() {
//     // console.log("")
//     this.className = 'box'
//     this.append(drag)
// }            


const fill = document.querySelector('.active')
const empties = document.querySelectorAll('.box')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

empties.forEach(empty =>{
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
})
function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'active'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hover'
}
     
function dragLeave() {
    this.className = 'box'
}

function dragDrop() {
    this.className = 'box'
    this.append(fill)
}