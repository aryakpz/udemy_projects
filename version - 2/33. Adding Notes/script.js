

const note = document.querySelector('.note')
// const bodysec=document.querySelector('.bodysec')

note.addEventListener('click', () => {

    const notes = document.createElement('div')
    notes.className = 'notepad'
    notes.innerHTML = `<div class="head">
    <div class="icons">
    <img src="image/pen-to-square-solid.svg" alt="np" class="edit">
    <img src="image/trash-solid.svg" alt="np" class="delete">
    </div> </div>
    <textarea></textarea>`
    // notes.appendChild(head)

    const editimg = notes.querySelector('.edit')
    editimg.addEventListener('click', () => {
        // console.log("jnj")  
        notes.classList.toggle('active')
    })

    const deleteimg = notes.querySelector('.delete')
    deleteimg.addEventListener('click', () => {
        notes.remove()
    })

    // bodysec.appendChild(notes)  
    document.body.appendChild(notes)



})                    