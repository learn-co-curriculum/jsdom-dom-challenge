let timer = document.querySelector("#counter")
document.addEventListener("DOMContentLoaded", main);

function main(e) {
    autoTimer()
    let minusCountBtn = document.getElementById("-")
    minusCountBtn.onclick = (e) => {
        decrementCounter(e)
    }
    let plusCountBtn = document.getElementById("+")
    plusCountBtn.onclick = (e) => {
        incrementCounter(e)
    }
    let heartBtn = document.getElementById("<3")
    heartBtn.onclick = (e) => {
        heartThis(e)
    }
    let pauseBtn = document.querySelector("#pause")
    pauseBtn.onclick = (e) => {
        pauseCounter(e)
    }

    let submitBtn = document.querySelector("#submit")
    submitBtn.onclick = (e) => {
        e.preventDefault()
        addComment(e)
    }
}
let auto;

function autoTimer() {
    let counter = getCounter()
    auto = setInterval(function () { 
        let new_count = (parseInt(counter.innerText) + 1).toString()
        counter.innerText = new_count
     }, 1000);
}

//helper method to just grab the counter from the html
getCounter = () => {
    return counter = document.querySelector("#counter")
}

decrementCounter = (e) => {
    let counter = getCounter()
    let new_count = (parseInt(counter.innerText) - 1).toString()
    counter.innerText = new_count
}

incrementCounter = (e) => {
    let counter = getCounter()
    let new_count = (parseInt(counter.innerText) + 1).toString()
    counter.innerText = new_count
}

pauseCounter = (e) => {
    // let counter = getCounter()
    if (e.target.innerText == "pause") {
        clearInterval(auto)
        e.target.innerText = "resume"
    } else {
        e.target.innerText = "pause"
        autoTimer()
    }
}

heartThis = (e) => {
    
        e.target.style = "background-color: #FF0000"
        e.target.innerText = "🖤"
    
}

addComment = (e) => {
    let inputFieldValue = e.target.parentElement[0].value
    // debugger
    let new_comment = document.createElement("p")
    new_comment.innerText = inputFieldValue
    let dividerLine = document.createElement("p")
    dividerLine.innerText = "--------------------"
    let commentDiv = document.querySelector("#list")
    commentDiv.appendChild(new_comment)
    commentDiv.appendChild(dividerLine)
    e.target.parentElement.reset()
}