const quizdata = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
]; 

const quiz=document.querySelector('.main')
const ques=document.querySelector('.question') 
const ans=document.querySelectorAll('.ans')
const a=document.getElementById('at')
const b=document.getElementById('bt')
const c=document.getElementById('ct')  
const d=document.getElementById('dt') 
const btn=document.querySelector('button') 
  
let current =0
let score =0
  
function load(){  
    select()
    const currentques =quizdata[current]
    ques.innerText=currentques.question

    a.innerText=currentques.a
    b.innerText=currentques.b
    c.innerText=currentques.c
    d.innerText=currentques.d

// quiz.appendChild(currentques)
}
load()
function select(){
    ans.forEach(i=> i.checked =false)
}
btn.addEventListener('click',()=>{
    const ans = getSelected()
    console.log(ans)

    if(ans){
        if(ans === quizdata[current].correct)
            {
                score++
                console.log(score)
            }

        current ++

        if(current < quizdata.length)
            {
                load()
            }
            else{
                quiz.innerHTML=`
                <h2>You answered correctly at ${score} / ${quizdata.length} questions </h2>
                <br>
                <button onclick="location.reload()">Try again</button>
                `
            }
    }
})
function getSelected(){
    let answer;
    ans.forEach(i=>{
        if(i.checked)
            answer=i.id
    })

    return answer
}         
      
