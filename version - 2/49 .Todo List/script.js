

const input = document.querySelector('input');
const display = document.querySelector('.display');

input.addEventListener('keydown', (e) => {

    if (e.key === 'Enter') 
    {
        const im = document.createElement('li');
        im.classList.add('box');
        im.innerHTML = input.value;
        display.appendChild(im); 
    }

});
                                     