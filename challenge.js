setInterval(incrementCounter, 1000);
let isPaused = false;
let counter = document.querySelector('#counter');
let list = document.querySelector('.likes');
let likeHash = {}

let plusButton = document.querySelector('#plus');
let minusButton = document.querySelector('#minus');
let likeButton = document.querySelector('#heart');
let pauseButton = document.querySelector('#pause');

let buttonArray = [plusButton, minusButton, likeButton];

plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);
likeButton.addEventListener("click", likeNumber);
pauseButton.addEventListener("click", togglePause);

let form = document.querySelector("#comment-form");
let commentBox = document.querySelector("#comment-input");
let commentDiv =  document.querySelector("#list");

form.addEventListener('submit', handleComment);

function handleComment(event) { 
    event.preventDefault(); 
    let paragraph = document.createElement('p');
    let commentNode = document.createTextNode(commentBox.value)
    paragraph.appendChild(commentNode);
    commentDiv.appendChild(paragraph);
    commentBox.value = ""
} 

function togglePause() {
    isPaused = !isPaused;
    buttonArray.forEach(toggleButton);
    
    if (!isPaused) {
        pauseButton.innerText = "pause";
    } else {
        pauseButton.innerText = "resume";
    }
}

function toggleButton (button) {
    button.disabled = !button.disabled
}

function incrementCounter() {
        counter.innerText++;
}

function decrementCounter() {
        counter.innerText--;
}

function likeNumber() {

    let isNewListItem = !document.querySelector(`#like${counter.innerText}`)

    if (isNewListItem) {
        let listItem = document.createElement('li');
        listItem.id = `like${counter.innerText}`;
        listItem.innerText = `${counter.innerText} has been liked 1 time`;
        list.appendChild(listItem);
        likeHash[counter.innerText] = 1;
    } else {
        let listItem = document.querySelector(`#like${counter.innerText}`);
        num_times = likeHash[counter.innerText]
        listItem.innerText = `${counter.innerText} has been liked ${num_times} times`;
        likeHash[counter.innerText]++;
    }
}






