
const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbol')
const generateEl = document.querySelector('.submit')
const clipboardEl = document.getElementById('clipboard')
  
const randomFunc = {
    lower: randomlower,
    upper: randomupper,
    number: randomnumber,
    symbol: randomsymbol
}

clipboardEl.addEventListener('click', () => {
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    navigator.clipboard.writeText(password)
    alert('password copied')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatepassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatepassword() {
    let generate = ''
    const type = lower + upper + number + symbol
    const arr = [{ lower }, { upper }, { number }, { symbol }].filter(item => object.values(item)[0])

    if (type === 0) {
        return ''
    }
    for (let i = 0; i < length; i += type) {
        arr.forEach(type => {
            generatepassword += randomFunc[funcName]()
        })
    }

} 

const final = generatepassword.slice(0, length)

return final;

function randomlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48)
}
function randomsymbol() {
    const symbol = '!@#$%^&*(){}[]+<>?,'
    return symbol[Math.floor(Math.random() * symbol.length)]
}


// console.log(random())
