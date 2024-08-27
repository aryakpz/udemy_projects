// const input = document.querySelectorAll(' .subinput ')
// const main=document.querySelector('.main')
   
// input.forEach(s => {
//     const label=s.querySelectorAll('.subinput label')
//     const ins=s.querySelector('.subinput input')
   
//     s.addEventListener('mouseover', () => {

//         label.style.top=label.style.top==='0'+'%'? '30'+'%':'0'+'%'

//     })
//     s.addEventListener('mouseLeave',()=>{ 
//         s.removeEventListener('mouseover')
//     })
// })  



// document.querySelectorAll('.subinput label').forEach(label => 
// {
//     const labelText = label.innerText;
//     label.innerHTML = labelText.split('').map(letter => `<span>${letter}</span>`).join('');
// });
                         
   


const labels = document.querySelectorAll('.subinput label')

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})                 

