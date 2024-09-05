

const main = document.querySelector('.main')
const colors = ["#e74c3d", "38e44ad", "#3498db", "#e67e22", "#2ecc71",
    "#e4aa3d", "84a4da", "#549eea", "#eeaacc", "#cceeaa"
]
const sq = 500

for (let i = 0; i < sq; i++) {
    const sqr = document.createElement('div')
    sqr.classList.add('square')

    sqr.addEventListener('mouseover', () => setColor(sqr))
    sqr.addEventListener('mouseout', () => removeColor(sqr))

    main.appendChild(sqr)
}

function setColor(e) {
    const color = getcolor()
    e.style.background = color
    e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`

}

function removeColor(e) {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}


function getcolor() {
    return colors[Math.floor(Math.random() * colors.length)]
}