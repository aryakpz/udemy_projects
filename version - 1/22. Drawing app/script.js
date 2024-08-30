
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const inc = document.getElementById('increase')
const dec = document.getElementById('decrease')
const clear = document.getElementById('clear')
const clr = document.querySelector('.color')


inc.addEventListener('click', () => {

})

clr.addEventListener('change', (e) => color = e.target.value)

let size = 10;
let color = clr.value;
let x;
let y;

ispress = false;

canvas.addEventListener('mousedown', (e) => {
    ispress = true;
    const x = e.offsetX;
    const y = e.offsetY;
    // console.log(ispress, x, y)
})

canvas.addEventListener('mouseup', (e) => {
    ispress = false
    const x = undefined
    const y = undefined
    // console.log(ispress, x, y)
})

canvas.addEventListener('mousemove', (e) => {
    if (ispress) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        // console.log(ispress, x, y)
        drawcircle(x2, y2)
        drawline(x, y, x2, y2)
        x = x2
        y = y2
    }

})

function drawcircle(x, y) {

    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawline(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke()

}