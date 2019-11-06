document.addEventListener("DOMContentLoaded", function() {
	addEventListeners();
	counter();
});

let counterValue = parseInt(document.getElementById("counter").innerText, 10);

function counter() {
	setInterval(() => {
		counterValue += 1;
		document.getElementById("counter").innerText = counterValue;
	}, 1000);
}

function addEventListeners() {
	let minusButton = document.getElementById("minus");
	let plusButton = document.getElementById("plus");
	let heartButton = document.getElementById("heart");
	let pauseButton = document.getElementById("pause");
	let formSubmitButton = document.getElementById("submit");

	minusButton.addEventListener("click", function() {
		counterValue--;
		document.getElementById("counter").innerText = counterValue;
	});

	plusButton.addEventListener("click", function() {
		counterValue++;
		document.getElementById("counter").innerText = counterValue;
	});

	heartButton.addEventListener("click", function() {
		let heartValue = document.getElementById("counter").innerText;
		checkExistingLis(heartValue);
	});

	pauseButton.addEventListener("click", function(e) {
		let submitButton = document.getElementById("submit");
		if (!submitButton.attributes["disabled"]) {
			submitButton.disabled = true;
			minusButton.disabled = true;
			plusButton.disabled = true;
			heartButton.disabled = true;
			e.target.innerText = "resume";
		} else {
			e.target.innerText = "pause";
			submitButton.disabled = false;
			minusButton.disabled = false;
			plusButton.disabled = false;
			heartButton.disabled = false;
		}
	});

	formSubmitButton.addEventListener("click", function(e) {
		e.preventDefault();
		let text = document.createElement("div");
		text.innerText = document.getElementById("comment-input").value;
		document.getElementById("list").append(text);
	});
}

function checkExistingLis(num) {
	let li = document.getElementById(`number-${num}`);
	if (li) {
		let likes = parseInt(li.getAttribute("data-likes"), 10);
		likes += 1;
		li.setAttribute("data-likes", `${likes}`);
		li.innerText = `${num} liked ${likes} times`;
	} else {
		let createdLike = document.createElement("li");
		createdLike.setAttribute("id", `number-${num}`);
		createdLike.setAttribute("data-likes", "1");
		createdLike.classList.add("liked-num");
		createdLike.setAttribute("data-num", parseInt(num), 10);
		createdLike.innerText = `${num} liked 1 time`;
		let ulParent = document.getElementsByClassName("likes")[0];
		ulParent.appendChild(createdLike);
	}
}
