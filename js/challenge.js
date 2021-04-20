
var currentSecs = 0;
var currentTime = document.getElementById("counter");

document.getElementById("minus").addEventListener("click", incrementDown); 
document.getElementById("plus").addEventListener("click", incrementUp); 
document.getElementById("pause").addEventListener("click", CheckTimer); 
document.getElementById("heart").addEventListener("click", likeMessage); 
   
    var timer = setInterval(countUp, 1000);
    var likesArray = []
    const comment = document.getElementById("comment-form");

    comment.addEventListener("submit", submitComment);

    function countUp() {
        currentSecs ++;
        currentTime.innerHTML = `${currentSecs}`;
    }

    function incrementDown() {
        currentSecs --;
        currentTime.innerHTML = `${currentSecs}`;
    }

    function incrementUp() {
        currentSecs ++;
        currentTime.innerHTML = `${currentSecs}`;
    }

    function CheckTimer() {
        var value = document.getElementById("pause").innerHTML
            if (value === " pause "){
                stopTimer()
            }
            else{
                resumeTimer()
            }
    }

    //The below methods were necessary because an if/else statement didn't work when changing the .innerhtml element. The else statement always read true following the the value's alteration in the if statement.
    function stopTimer() {
        clearInterval(timer);
        document.getElementById("pause").innerHTML = " resume "
        timer = currentSecs 
        
    }
    function resumeTimer() {
            timer = currentSecs
            document.getElementById("pause").innerHTML = " pause "
            timer = setInterval(countUp, 1000);
    }
        
    function likeMessage() {
        if (likesArray.includes(currentSecs)){
            duplicateMessage(currentSecs);
        }
        else{
        const newLike = document.createElement("LI");
        const newText = document.createTextNode(`${currentSecs} has been liked 1 times.`);
        newLike.appendChild(newText);
        document.getElementById("likes").appendChild(newLike);
        likesArray.push(currentSecs)
        }
    }

    
    function duplicateMessage(currentSecs){
        debugger
        var likesNumber = likesArray.filter(x => x === currentSecs)
        likesArray.push(currentSecs)

        debugger
        const newLike = document.createElement("LI");
        const newText = document.createTextNode(`${currentSecs} has been liked ${likesNumber.length + 1} times.`);
        newLike.appendChild(newText);
        document.getElementById("likes").appendChild(newLike);
    }

    function submitComment(e){
        e.preventDefault()
        sendData(e.target.children[0].value)
        debugger
        e.target.children[0].value = ""
    }

    function sendData(input) {
        const newComment = document.createElement("LI");
        const list = document.getElementById("list");
        newComment.innerText = input;
        list.appendChild(newComment);


    }