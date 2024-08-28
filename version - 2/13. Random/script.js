

  //====================   not completed   
  
 // 
const text = document.querySelector('textarea');
const choice = document.querySelector('.choice');

text.addEventListener('input', (e) => {
    const values = e.target.value.split(',');

    choice.innerHTML = '';

    values.forEach(item => {
        const trim = item.trim();
        if (trim) {
            const b = document.createElement('span');
            b.textContent = trim; 
            choice.appendChild(b);
        }
    });
});


document.addEventListener('keydown',(event)=>{
    const choice = document.querySelectorAll('.choice span');
    if(event.key =='Enter')
        {
            setTimeout(() => {
            choice.forEach(item =>{
                console.log(item)
                item.style.backgroundColor='red'
            })
            },400);  
        }
})  



      