


const btn=document.querySelector('button')
const joke=document.querySelector('h1')
function display(){

    const config={
    headers:{
        'Accept':'application/json'
    }
}
    fetch('https://icanhazdadjoke.com/',config)


.then(res=>res.json())
.then(data=>{

   console.log(data)
joke.innerText=data.joke
                                           

})
}   


btn.addEventListener('click',()=>{
    display()
})
                            