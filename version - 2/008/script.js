const input = document.querySelectorAll(' .subinput ')
const main=document.querySelector('.main')
   
input.forEach(s => {
    const label=s.querySelector('.subinput label')
    const ins=s.querySelector('.subinput input')
   
    s.addEventListener('click', () => {

        label.style.top=label.style.top==='0'+'%'? '30'+'%':'0'+'%'

    })
})  

// document.querySelectorAll('.subinput label').forEach(label => 
// {
//     const labelText = label.innerText;
//     label.innerHTML = labelText.split('').map(letter => `<span>${letter}</span>`).join('');
// });
