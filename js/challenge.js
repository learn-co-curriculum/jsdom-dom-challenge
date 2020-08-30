const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const likes = document.querySelector('.likes');
const comments = document.querySelector('.comments');
const input = document.querySelector('#comment-input');
const submit = document.querySelector('.submit');

const running = () => {
    return pause.innerText === "pause" ? true : false ;
}

const increment = () => {
    counter.innerText = parseInt(counter.innerText) + 1 
}

const pauseTimer = () => {
    let buttons = [plus, minus, heart, submit]
    if (pause.innerText === "pause"){
        pause.innerText = "resume"
    } else {
        pause.innerText = "pause"
    }
}






document.addEventListener("DOMContentLoaded", () => {

    
    setInterval(() => {
        if(running()){
            increment()
        }
    }, 1000)

    pause.addEventListener("click", () => { pauseTimer() })


});