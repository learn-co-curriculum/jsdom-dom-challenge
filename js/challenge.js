const counter = document.querySelector("#counter")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const heart = document.querySelector("#heart")
const likes = document.querySelector(".likes")
const pause = document.querySelector("#pause")
const commentForm = document.querySelector("#comment-form")
const comments = document.querySelector(".comments")
let paused = false
let timer


function setTimer() {
    timer =setInterval(increment, 1000);
}
setTimer()

function btns(){
    heart.disabled = !paused
    plus.disabled = !paused
    minus.disabled = !paused

}

pause.addEventListener("click", function(){
    if (paused) {
        btns()
        pause.textContent = "pause"
        setTimer()
        paused = false
    } else {
        btns()
        pause.textContent = "resume"
        clearInterval(timer)
        paused = true
    }
        
})


function increment() {
    
    const text = parseInt(counter.textContent)
    counter.textContent = text + 1
    
}

minus.addEventListener("click", function(){
    const text = parseInt(counter.textContent)
    counter.textContent = text - 1
})

plus.addEventListener("click", increment)

heart.addEventListener("click", function(){

    const like = document.createElement("li")
    like.setAttribute("id", counter.textContent) 
    const match = likes.children.namedItem(`${counter.textContent}`)
    
    if (match) {
        console.log(match)
        match.dataset.counter = parseInt(match.dataset.counter) + 1
        match.textContent = `${match.id} has been liked ${match.dataset.counter} times`

    } else {
        like.dataset.counter = 1
        like.textContent = `${like.id} has been liked ${like.dataset.counter} times`
        likes.append(like)
    }
})

commentForm.addEventListener('submit', function(event){
    event.preventDefault()
    const comment = document.createElement('li')
    comment.textContent = event.target.comment.value
    comments.append(comment)
    event.target.reset()
})

