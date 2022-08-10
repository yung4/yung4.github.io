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
