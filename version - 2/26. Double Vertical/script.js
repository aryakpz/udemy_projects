
// const container = document.querySelector('.main')
// const right = document.querySelector('.right')
// const left = document.querySelector('.left')
// const up = document.querySelector('.up')
// const down = document.querySelector('.down')
// const length = document.querySelectorAll('div').length

// let index = 0
// length.style.top = `-${(length - 1) * 100} vh`
// up.addEventListener('click', () => change('up'))
// down.addEventListener('click', () => change('down'))

// const change = (direction) => {
//     const height = container.clientHeight
//     if (direction == 'up') {
//         index++;
//         if (index > length - 1) {
//             index = 0;
//         }
//     }
//     else if (direction === 'down') {
//         index--;
//         if (index < 0) {
//             index = length - 1
//         }
//     }
//    right.style.transform=`translateY(-${index * height}px)`
//    left.style.transform=`translateY(-${index * height}px)`
// }



const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0
     
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {    
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}