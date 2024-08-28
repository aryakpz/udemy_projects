

const div = document.querySelectorAll('.main div');

const app = new Audio("audio/sound-board_sounds_applause.mp3");
const boo=new Audio("audio/sound-board_sounds_boo.mp3")
const gasp=new Audio("audio/sound-board_sounds_gasp.mp3")
const tada=new Audio("audio/sound-board_sounds_tada.mp3")
const vic=new Audio("audio/sound-board_sounds_victory.mp3")
const wro = new Audio("audio/sound-board_sounds_wrong.mp3");



div.forEach(item => {
    item.addEventListener('click', () => {
        
        app.pause();
        app.currentTime = 0;
        boo.pause();
        boo.currentTime = 0;
        gasp.pause();
        gasp.currentTime=0;
        tada.pause();
        tada.currentTime=0
        vic.pause();
        vic.currentTime=0;


        if (item.className === 'app') {
            app.play(); 
        } else if (item.className === 'boo') {
            boo.play();  
        }
        else if (item.className === 'gasp') {
            gasp.play();  
        }else if (item.className === 'tada') {
            tada.play();  
        }else if (item.className === 'vic') {
            vic.play();  
        }else if (item.className === 'wro') {
            wro.play();  
        }
    });
});