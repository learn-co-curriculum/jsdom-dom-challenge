const counter = document.getElementById("counter")
const minusButton = document.getElementById("minus")
const heartButton = document.getElementById("heart")
const plusButton = document.getElementById("plus")
const pauseButton = document.getElementById("pause")
let load = true
let heartedNum = 0 
let likesIndex = 0

// Increments times by 1 for every second after page loads

document.addEventListener("DOMContentLoaded", function(){
         setInterval(function() {
             if (load == true){
                counter.innerText ++
             }
        
        }, 1000)
})

//As a user, I can manually increment and decrement the counter using the plus and minus buttons.
minusButton.addEventListener("click", function(event){
    counter.innerText--
})

plusButton.addEventListener("click", function(event){
    counter.innerText++
})
// As a user, I can pause the counter, which should 

pauseButton.addEventListener("click", function(event){
    event.preventDefault
    if (load == true){
        load = false
        pauseButton.innerHTML = "resume"
        minusButton.disabled = false 
        plusButton.disabled = false 
        heartButton.disabled = false 
    }
    else if (load == false){
        load = true 
        pauseButton.innerHTML = "pause"
        minusButton.disabled = true
        plusButton.disabled = true 
        heartButton.disabled = true 
    }  
})


//As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.

heartButton.addEventListener("click", function(event){
    event.preventDefault()
    heartedNum += 1 
    // const number = counter.textContent
    // const allLikes = document.getElementById("likes")
    leaveLike()

    // if (number in allLikes){
        
    // } else if (!number in heartedNum) {
    //     heartedNum.append(number)
    //     heartedNum.number.textContent ++
    // }
    
})

function leaveLike(){
    // const likesUl = document.getElementsByClassName("likes")
    // const likesLi = document.createElement("li")
    
    // let likes = 1
    // time = counter.value 

    // likesLi.className == `${time}`
    // likesLi.innerHTML = `${time} was liked <span>${likes}</span> times!`
    // likesUl.appendChild(likesLi)

    
    // likes.append(content)
    //Change the HTML content of the first <li> element (index 0) in a list:
    
    const ul  = document.getElementsByTagName("ul")[likesIndex]
    const liList = document.getElementsByTagName("li")
    if (heartedNum == 1 ) {
    const li = document.createElement("li")
    li.innerHTML = `${counter.innerText} was liked `
    ul.appendChild(li) 
    likesIndex++
    // debugger
    }
}



//  As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."
function leaveComment(){
    const comment = document.getElementById("comment-input")
    const content = document.createElement("li")
    const list = document.getElementById("list")
    content.innerHTML = comment.value 
    list.appendChild(content)
    comment.value = ""
    // debugger
}


document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault()
    leaveComment()
})

