document.addEventListener("DOMContentLoaded", function() {
	addEventListeners();
	counter();
});
let counterValue = parseInt(document.getElementById("counter").innerText, 10);

function counter() {
	setInterval(() => {
		document.getElementById("counter").innerText = counterValue;
		counterValue += 1;
	}, 1000);
}

function addEventListeners() {
	let minusButton = document.getElementById("minus");
	let plusButton = document.getElementById("plus");
	let heartButton = document.getElementById("heart");
	let pauseButton = document.getElementById("pause");

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
		let createdLike = document.createElement("li");
		createdLike.innerText = `${heartValue} was liked`;
		let ulParent = document.getElementsByClassName("likes")[0];
		ulParent.appendChild(createdLike);
	});

	pauseButton.addEventListener("click", function(e) {
		let submitButton = document.getElementById("submit");
		if (!submitButton.attributes["disabled"]) {
			submitButton.disabled = true;
			e.target.innerText = "resume";
		} else {
			e.target.innerText = "pause";
			submitButton.disabled = false;
		}
	});
}
