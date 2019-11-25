// variable declaration 
const counterH1 = document.querySelector('#counter')
const incrementBtn = document.querySelector('#plus')
const decrementBtn = document.querySelector('#minus')
const heartBtn = document.querySelector('#heart')
const pauseBtn = document.querySelector('#pause')
const likes = document.querySelector('.likes')
const buttonsArray = [incrementBtn,decrementBtn,heartBtn]
const commentForm = document.querySelector("#comment-form");
const commentsList = document.querySelector(".comments");


window.addEventListener('DOMContentLoaded', (e)=>{
  setInterval(()=>{
    counterH1.textContent ++
  },1000)

  incrementBtn.addEventListener("click", () => {
		let newNumber = parseInt(counterH1.textContent);
		newNumber += 1;
		counterH1.textContent = newNumber;
	});

	decrementBtn.addEventListener("click", () => {
		let newNumber = parseInt(counterH1.textContent);
		newNumber -= 1;
		counterH1.textContent = newNumber;
	});

	heartBtn.addEventListener("click", () => {
		let likesLi = document.createElement("li");
    likesLi.textContent = `${counterH1.innerHTML} was liked`;
    likes.append(likesLi);
    
  });
  
  let isPause = false
  pauseBtn.addEventListener('click', ()=>{
    isPause = !isPause
    if(isPause){
      pauseBtn.innerText = 'Resume'
      buttonsArray.forEach(button => disableBtn(button));
    }else{
      pauseBtn.innerText = 'Pause'
      buttonsArray.forEach(button => disableBtn(button));
    }
  })

  const disableBtn = button =>{
    button.disabled = !button.disabled
  }

  commentForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let commentText = e.target.comment.value
    let commentsLi = document.createElement("li");
    commentsLi.innerText = commentText;
    let commentsUl = document.createElement('ul')
    commentsUl.append(commentsLi)
    commentsList.append(commentsUl)
    commentForm.reset()
  })

})




