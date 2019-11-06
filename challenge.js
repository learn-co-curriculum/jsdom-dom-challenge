document.addEventListener("DOMContentLoaded", function() {
	counter();
});

function counter() {
	let counter = document.getElementById("counter");
	let counterValue = parseInt(counter.innerText, 10);
	setInterval(() => {
		document.getElementById("counter").innerText = counterValue;
		counterValue += 1;
	}, 1000);
}
