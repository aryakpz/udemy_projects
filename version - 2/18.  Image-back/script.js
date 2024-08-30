
// const body=document.body
// const slide = document.querySelectorAll('.slide')
// const left = document.querySelector('.left')
// const right = document.querySelector('.right')


// let activeslide = 0

// left.addEventListener('click',() => {
//     activeslide ++;

//     if(activeslide >slide.length -1 )
//         {
//             activeslide =0;
//         }


//     updatebody();
//     updateslide();
    
// }) 

// right.addEventListener('click',() => {
//     activeslide --;

//     if(activeslide < slide.length -1)
//         {
//            activeslide =activeslide - 1
//         }

//         updatebody();
//         updateslide();

// })

// updatebody()

// function updatebody(){
//     body.style.backgroundImage=slide[activeslide].style.backgroundImage
// }

// function updateslide(){
//     slide.forEach((item)=>item.classList.remove('actvie'))
//     slide[activeslide].classList.add('active')
// }


const body = document.body;
const slide = document.querySelectorAll('.slide');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let activeslide = 0;

left.addEventListener('click', () => {
    activeslide++;

    if (activeslide > slide.length - 1) {
        activeslide = 0;
    }

    updatebody();
    updateslide();
});

right.addEventListener('click', () => {
    activeslide--;

    if (activeslide < 0) {
        activeslide = slide.length - 1;
    }

    updatebody();
    updateslide();
});

updatebody();

function updatebody() {
    body.style.backgroundImage = slide[activeslide].style.backgroundImage;
}

function updateslide() {
    slide.forEach((item) => item.classList.remove('active'));
    slide[activeslide].classList.add('active');
}
