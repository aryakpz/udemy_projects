
const show = document.querySelector('.show')

const item=document.querySelector('.item')
const list=['Message one','message two','message three','message four']

const color=['warning','success','error']


show.addEventListener('click', () => create())



function create(){
   const notification =document.createElement('div')
   notification.classList.add('list')

    notification.classList.add(clrs())
   notification.innerText=random()
   
   item.appendChild(notification)

   setTimeout(()=>{
    notification.remove()
   },3000)

}

function random(){

    return list[Math.floor(Math.random()* list.length)]
      
}             
                                                                                                                                                                                                                                                                                                                              

function clrs(){

    return color[Math.floor(Math.random()* color.length)]
      
}             
 