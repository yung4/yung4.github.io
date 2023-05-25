// const coverHeight = (window.innerWidth * 3) / 2;
let mobile = false;

function checkMobile() {
	if (window.matchMedia("(max-width: 767px)").matches) {
		// The viewport is less than 768 pixels wide
		mobile = true;
		//console.log("mobile!");
	}
}

// const tl = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: "#cover",
// 		start: "top top",
// 		end: "bottom bottom",
// 		scrub: true,
// 		pin: true,
// 		markers: true,
// 		onUpdate: checkHeight,
// 	},
// });

// ScrollTrigger.create({
// 	start: 0,
// 	end: "max",
// 	onUpdate: updateValues,
// });

// const imgHeightClamp = gsap.utils.clamp(window.innerHeight, 5550);
// const imgWidthClamp = gsap.utils.clamp(
// 	window.innerWidth / 2,
// 	window.innerWidth
// );

// function checkHeight() {
// 	const bg = document.querySelector("#img-bg");
// 	console.log(bg.clientHeight);
// 	if (bg.clientHeight <= window.innerHeight) {
// 		console.log("too small");
// 		tl.pause();
// 	}
// }

// function changePosition(_, t) {
// 	console.log(t.offsetHeight);
// 	return `${(t.offsetHeight - innerHeight) / 100}% 50% `;
// }
// //
// tl.to(".parallax", { scale: 0.5 }, 0);
// tl.to(".parallax", { width: " 50%", height: "50%" }, 0);
// tl.to(
// 	".parallax",
// 	{
// 		ease: "none",
// 		backgroundPosition: (_, t) => {
// 			console.log(t.offsetHeight);
// 			console.log(innerHeight);
// 			return `${(t.offsetHeight - innerHeight) / 100}% 50% `;
// 		},
// 		width: "50%",
// 	},
// 	0
// );
// tl.to("#hidden-trigger", { scaleX: 0.5, scaleY: 0.5 }, 0);
// tl.fromTo("#hidden-trigger", { height: "5550px" }, { height: "75%" }, 0);
// tl.fromTo(".parallax", { scale: 10 }, { scale: 1 }, 0);

//make social links appear after cover
if (!mobile) {
	//console.log("not mobile");
	const socialLinks = document.querySelector(".social-container");
	//console.log(socialLinks);
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: "#content",
			start: "-=7%",
			end: "-=5%",
			scrub: true,
		},
	});
	tl.fromTo(socialLinks, { "z-index": -3 }, { "z-index": 1, duration: 1 });

	// slide in and fade in animations
	gsap.utils.toArray(".section").forEach((panel, i) => {
		const parents = panel.children;
		let children = [];
		const paneltl = gsap.timeline({
			scrollTrigger: {
				trigger: panel,
				scrub: 3,
				start: "top 25%",
				end: "+=20%",
				once: true,
				//markers: true,
			},
		});

		for (let j = 0; j < parents.length; j++) {
			//console.log("PARENTS", j, parents[j].children)
			children.push(parents[j].children);
		}

		//console.log("CHILDREN", children)

		let direction = i % 2 ? 1 : -1;

		paneltl.fromTo(
			children,
			{ opacity: 0, x: 100 * direction, duration: 1 },
			{ opacity: 1, x: 0, duration: 5, stagger: 0.7 }
		);
	});

	//section snapping
	// gsap.utils.toArray(".section").forEach((panel, i) => {
	// 	gsap.from(panel, {
	// 		scrollTrigger: {
	// 			trigger: panel,
	// 			scrub: true,
	// 			//pin: true,
	// 			start: "top top",
	// 			end: "+=50%",
	// 		},
	// 	});
	// });
}

// gsap.set(".content:not(.initial)", { autoAlpha: 0 });

// var headlines = gsap.utils.toArray(".text");

// var totalDuration = 1000;
// var singleDuration = totalDuration / headlines.length;

// const lineTimeline = gsap.timeline();

// ScrollTrigger.create({
// 	trigger: ".pin-up",
// 	start: "top top",
// 	end: "+=" + totalDuration,
// 	//markers: true,
// 	pin: true,
// 	scrub: true,
// 	animation: lineTimeline,
// 	markers: true,
// });

// lineTimeline
// 	.to(".sideline", { duration: 1 }, 0)
// 	.to(".sideline", { duration: 0.9, scaleY: 1, ease: "none" }, 0);

// headlines.forEach((elem, i) => {
// 	const smallTimeline = gsap.timeline();

// 	const content = document.querySelector(".content-wrap");
// 	const relevantContent = content.querySelector(".content-" + i);

// 	ScrollTrigger.create({
// 		trigger: ".wrapper",

// 		start: "top -=" + singleDuration * i,
// 		end: "+=" + singleDuration,

// 		//markers: true,

// 		animation: smallTimeline,
// 		toggleActions: relevantContent.classList.contains("remaining")
// 			? "play none play reverse"
// 			: "play reverse play reverse",
// 	});

// 	smallTimeline
// 		.to(elem, { duration: 0.25, color: "orange", scale: 1.25, ease: "none" }, 0)
// 		.set(relevantContent, { autoAlpha: 1 }, 0.125);
// });
