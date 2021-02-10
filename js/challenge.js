let plus = document.querySelector('#plus');
let counter = document.querySelector('#counter');
let minus = document.querySelector('#minus');
let heart = document.querySelector('#heart');
let pause = document.querySelector('#pause');
let likes = document.querySelector('.likes');
let likesArr = [...likes.children]

plus.addEventListener("click", incrementCounter);
minus.addEventListener("click", decrementCounter);
pause.addEventListener("click", toggleCounter);
heart.addEventListener("click", displayLikes);

function displayLikes() {
    let li = document.createElement('li');
    let likeCount = 1
    li.innerHTML = `${counter.textContent} has been liked ${likeCount} time(s)`;
    likes.appendChild(li);
}

function incrementCounter() {
    let int = parseInt(counter.innerHTML, 10);
    int++;
    let finalString = int.toString();
    counter.textContent = finalString;
}

function decrementCounter() {
    let counter = document.querySelector('#counter');
    let int = parseInt(counter.innerHTML, 10);
    int--;
    let finalString = int.toString();
    counter.textContent = finalString;
}

function persistCounter() {
    interval = setInterval(incrementCounter, 1000)
}

function toggleCounter() {
    if (pause.innerHTML === "resume") {
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        persistCounter();
        pause.innerHTML = "pause";
    } else {
        pause.innerHTML = "resume";
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        clearInterval(interval);
    }
}

document.querySelector('#comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let newComment = document.querySelector('#comment-input').value;
    let comments = document.querySelector('#list');
    let ul = document.createElement("ul");
    comments.appendChild(ul)
    let li = document.createElement("li");
    li.innerHTML = newComment;
    ul.appendChild(li);
    document.querySelector('#comment-form').reset();
});
