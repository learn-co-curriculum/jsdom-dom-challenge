const counter = document.querySelector('#counter');
const likeButton = document.querySelector('#heart');

let commentForm = document.querySelector('#comment-form');
let counterInterval = setInterval(incrementCounter, 1000);
    
function incrementCounter(){
    counter.textContent++;
}

function decrementCounter(){
    counter.textContent--;
}

likeButton.addEventListener('click', function(event){
    let currentNum = counter.textContent;
    if (!!document.querySelector(`[data-num='${currentNum}'`)){
        incrementLikes(currentNum);
    } else {
        createLikeLi(currentNum);
    }

})


function createLikeLi(number){
    let li = document.createElement('li');
    li.dataset.likeCount = 1;
    li.innerHTML = `${number} has been liked ${li.dataset.likeCount} time`
    li.dataset.num = number;
    

    document.querySelector('.likes').append(li)
}

function incrementLikes(number){
    let li = document.querySelector(`[data-num='${number}'`);
    li.dataset.likeCount = parseInt(li.dataset.likeCount) + 1;
    
    li.innerText = `${number} has been liked ${li.dataset.likeCount} times`
}

document.querySelector('#pause').addEventListener('click', function(event){
    let button = event.target;
    if (button.innerText == 'pause'){
        clearInterval(counterInterval);
        disableButtonsExceptResume();
        button.innerText = 'resume';
    } else {
        counterInterval = setInterval(incrementCounter, 1000);
        enableAllButtons();
        button.innerText = 'pause';
    }


});

function disableButtonsExceptResume(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn){
        btn.disabled = true;
    })
    document.querySelector('#pause').disabled = false;
}

function enableAllButtons(){
    let buttons = document.querySelectorAll('button');
    buttons.forEach(function(btn){
        btn.disabled = false;
    })
}


commentForm.addEventListener('submit', function(event){
    event.preventDefault();
    let newCommentText = document.querySelector('#comment-input').value;
    document.querySelector('#comment-input').value = '';
    let p = document.createElement('p');
    p.innerText = newCommentText;
    if (p.innerText.length == 0){
        p.style.display = 'none';
    }

    document.querySelector('.comments').append(p);


})




document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#plus').addEventListener('click', incrementCounter);

    document.querySelector('#minus').addEventListener('click', decrementCounter);
    
})