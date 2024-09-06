// const datasec = document.querySelector('.data')


// const list = fetch('https://randomuser.me/api?results=50')
//     .then(res => res.json())
//     .then(data => {
//         data.results.forEach(item => {



//             display(item)


//         })
//     })


//  function display(item){

//             const sec = document.createElement('div')
//             sec.classList.add('section')
//             sec.innerHTML = `<img src="${item.picture.large}">

//                 <span> 
//                 <h4>${item.name.first}   ${item.name.last}</h4>
//                 <p>${item.location.city}, ${item.location.country}</p>
//                 </span>`

//             datasec.appendChild(sec)
//  }

//             const input = document.querySelector('input')
//             input.addEventListener('input', (e) => {
//                 const value = e.target.value

//             const datas=datasec.querySelectorAll('.section')
//             datas.forEach(val =>{

//                 const d=val.textContent

//             });


//                 const filter = datas.filter(item =>
//                     item.textContent.toLowerCase().includes(value));
//                 display(filter);



//             })





const datasec = document.querySelector('.data');

const list = fetch('https://randomuser.me/api?results=50')
    .then(res => res.json())
    .then(data => {
        data.results.forEach(item => {
            display(item);
        });
    });

function display(item) {
    const sec = document.createElement('div');
    sec.classList.add('section');
    sec.innerHTML = `
        <img src="${item.picture.large}">
        <span> 
            <h4>${item.name.first} ${item.name.last}</h4>
            <p>${item.location.city}, ${item.location.country}</p>
        </span>`;
    datasec.appendChild(sec);
}

const input = document.querySelector('input');
input.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase(); 

    const datas = Array.from(datasec.querySelectorAll('.section')); 

    datas.forEach(val => {
        const textContent = val.textContent.toLowerCase(); 
        if (textContent.includes(value)) {
            // val.style.display = ''; 
        } else {
            val.style.display = 'none'; 
        }
    });
});
