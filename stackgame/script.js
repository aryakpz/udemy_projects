
const ballel = document.querySelectorAll('.ball');
const box = document.querySelector('.box');
const sub = document.querySelector('.sub');
const third = document.querySelector('.third');

let selectedbox = null;

ballel.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('active');
        display(item);
    });
});

function display(item) {
    const value = item.textContent;
    const sel = document.createElement('div');
    sel.className = 'select';
    sel.innerHTML = value;
    box.appendChild(sel);
}

// // ===================================================//
        
// // box.addEventListener('click',()=>{
// //     next()
// // })

// // function next() {

// //     const allsel = box.querySelectorAll('.select')
// //     let last = box.lastElementChild
// //     last.classList.add('active')
// //     console.log(last.textContent)

// //     if (last) {
// //         const subval = document.createElement('div')
// //         subval.className = 'values'
// //         subval.innerHTML = last.textContent
// //         sub.appendChild(subval)
// //         box.removeChild(last)
// //     }

// // } 

// //  =================================================//

[box, sub, third].forEach(container => {
    container.addEventListener('click', () => {
        clickbox(container);
    });
});

function clickbox(container) {
    if (selectedbox) {
        move(selectedbox, container);
        selectedbox = null; 
    } 
    else {
        selectedbox = container; 
    }
}

function move(from, to) {
    if (from.lastElementChild) 
        {
        const last = from.lastElementChild;
        last.remove(); 
        to.append(last); 
    }
}
