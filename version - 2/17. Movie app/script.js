
const api = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
 const img = 'https://image.tmdb.org/t/p/w1280'
// const search = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const config = {
    headers: {
        "Accept": "application/json"
    }
};

fetch(api, config)
    .then(res => res.json())
    .then(data => {
    
    display(data)

    } )


             function display(data)
            {
                const sub = document.querySelector('.submain')

                data.results.forEach(item => {
        
            const card = document.createElement('div')
            card.className = 'card'

            const imgsec = document.createElement('div')
            imgsec.className = 'imagesec'

            const datasec = document.createElement('div')
            datasec.className = 'datasec'

            const data = document.createElement('h4')
            data.className = 'data'

            datasec.appendChild(data)

            const rate = document.createElement('div')
            rate.className = 'rate'

            rate.innerHTML = item.vote_average



            datasec.appendChild(rate)

            imgsec.innerHTML = `<img src="${img}${item.poster_path}" alt="go">`;
            card.appendChild(imgsec)

            data.innerHTML = item.title
            card.append(datasec)
            sub.appendChild(card)


            const r=parseFloat(item.vote_average)

            console.log(r)
            

            if(r>=7)

                {
                    rate.style.color='green'
                }
            else if( r>=5)
                {
                    rate.style.color='orenge'
                }

                else{
                    rate.style.color='red'
                }

        

            const info=document.createElement('div')
            info.className='info'
            info.innerHTML=item.overview;

            card.appendChild(info)


            // card.addEventListener('mouseover',()=>{
            //     info.style.display='flex'
            // })

            // card.addEventListener('mouseleave',()=>{
            //     info.style.display='none'

            // })

        })
    }

            const search=document.querySelector('.nav input')

            search.addEventListener('input',(e)=>{
                console.log(e.target.value)
            })

            


    // })  