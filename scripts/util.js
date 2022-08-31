function expand(id) {
	var moreText = document.getElementById(id);
	var buttonText = document.getElementById(`btn-${id}`);

	moreText.classList.toggle("more");

	if (buttonText.innerHTML === "less") {
		buttonText.innerHTML = "more";
	} else {
		buttonText.innerHTML = "less";
	}
}

function expandCoursework() {
	var coursework = document.getElementById("coursework");
	var expandButton = document.getElementById("coursework-btn");

	coursework.classList.toggle("more");

	if (expandButton.innerHTML === "Hide") {
		expandButton.innerHTML = "Coursework";
	} else {
		expandButton.innerHTML = "Hide";
	}
}

// function randomBackground() {
// 	const url = "./img/backgrounds/";
// 	const images = ["tahoe_sunset.jpg", "japan_lake.JPEG", "sf_ocean.jpg"];

// 	var randInt = Math.floor(Math.random() * images.length);

// 	console.log(randInt);

// 	const background = url + images[randInt];

// 	console.log(background);

// 	return background;
// }

// function setRandomBackground() {
// 	const background = document.getElementById("content");

// 	console.log(background);

// 	const image = randomBackground();

// 	background.style.backgroundImage = `url(${image})`;
// }
