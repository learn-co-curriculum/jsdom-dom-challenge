timer = {
time: 0,
status: true,
likes: 0
}
const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const liker = document.querySelector("#heart")
const pause = document.querySelector("#pause")
const ul = document.querySelectorAll(".likes")
let numOfLikes = 0

function run() {
    if (timer.status == true) {
    timer.time ++;
    counter.innerText = timer.time;
    }
}
let startRun = setInterval(run, 1000)

minus.addEventListener('click', function() {
    counter.innerText = timer.time--;
});

plus.addEventListener("click", function(){
    counter.innerText = timer.time++
})




liker.addEventListener("click", function(){
    console.log("you clicked the heart")
    numOfLikes++
    let li = document.createElement("li")
    li.textContent = `${timer.time} Has ${numOfLikes} Likes`
    ul.append(li)
    debugger
})


pause.addEventListener('click', function() {
    if (pause.innerText === 'pause'){
        pause.innerText = 'resume';
        timer.status = false
        plus.disabled = true;
        minus.disabled = true;
        liker.disabled = true;
    } else {
        pause.innerText = 'pause';
        timer.status = true
        plus.disabled = false;
        minus.disabled = false;
        liker.disabled = false;
    }
});

//const likes = querySelector(".likes")
//const listItems = querySelectorAll("li")

// liker.addEventListener("click", function(){
//     console.log(timer.time)

    // if (checkUl(timer.time)) {  
        
    // } else {
    //     const li = document.createElement("li")
    //     li.textContent = {time: timer.time,likes: likes} 
    //     likes.append(li)
    // }
    
// })

// function checkUl(time){
//     listItems.forEach(function(item){
//         if (parseInt(item.time) !== time){
            
//         }
//     })
// }

// when heart is clicked 
// if the number is in the ul 
//     likes++
// else 
//     timer.time = 1 like

