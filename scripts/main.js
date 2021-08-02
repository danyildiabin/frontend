const Content = [
	["Interests", "Networking", "C++", "ZIG", "Some Text", "Respawning", "Shooting", "Making stuff", "Respawning", "Shooting", "Making stuff"],
	["Months", "January", "February", "March", "April", "May", "June", "July"],
	["Skills", "Eating", "Reading", "Playing", "Making stuff"],
];

document.addEventListener("DOMContentLoaded", (event) => {
var main = document.getElementsByTagName("main");
for (let i = 0; i < Content.length; i++) {

	var mainblock = document.createElement("div");
	main[0].appendChild(mainblock);
	mainblock.classList.add('mainblock');

		var foreground = document.createElement("div");
		mainblock.appendChild(foreground);
		foreground.classList.add('foreground');

			var group_heading = document.createElement("h1");
			foreground.appendChild(group_heading);
			group_heading.innerHTML = Content[i][0];

		var background = document.createElement("div");
		mainblock.appendChild(background);
		background.classList.add('background');
		background.style.position = "relative";
		var value = parseInt(window
			.getComputedStyle(foreground, null)
			.getPropertyValue('height')
			.match(/\d+/)[0], 10);
		console.log(value);
		value = value + parseInt(window
			.getComputedStyle(foreground, null)
			.getPropertyValue('padding-top')
			.match(/\d+/)[0], 10);
		value = value + parseInt(window
			.getComputedStyle(foreground, null)
			.getPropertyValue('padding-bottom')
			.match(/\d+/)[0], 10);
		console.log(value);
		background.style.top = (-value).toString(10) + "px";
		background.style.height = value.toString(10) + "px";

			for (let j = 1; j < Content[i].length; j++) {
				var group_heading = document.createElement("h1");
				background.appendChild(group_heading);
				group_heading.innerHTML = Content[i][j];
			}
}
});

// let ticking = false;
// let prevScroll = 0; 
// document.addEventListener('wheel', (e) => {
// 	console.log("scroll event");
// 	e.stopImmediatePropagation();
// 	var scroll = window.pageYOffset || document.documentElement.scrollTop;
// 	scrollOptions = {
// 		left: 0,
// 		top: prevScroll,
// 		behavior: 'smooth'
// 	}
// 	console.log(e);
// 	if (!ticking) {
// 		window.requestAnimationFrame(() => {
// 			if(prevScroll < scroll) {
// 				//scrolling down
// 				scrollOptions.top = scrollOptions.top - 10;
// 			} else {
// 				scrollOptions.top = scrollOptions.top + 10;
// 			}
// 			window.scrollTo(scrollOptions);
// 			ticking = false;
// 		})
// 	}
// 	ticking = true;
// 	prevScroll = scroll;
// });

window.onresize = setBackgroundSizes;

function setBackgroundSizes() {
	console.log("resize event");
	var main = document.getElementsByTagName("main");
	var mainblocks = main[0].getElementsByClassName("mainblock");
	for (let i = 0; i < mainblocks.length; i++) {
		var foreground = mainblocks[i].getElementsByClassName("foreground")[0];
		var background = mainblocks[i].getElementsByClassName("background")[0];
		var value = parseInt(window
			.getComputedStyle(foreground, null)
			.getPropertyValue('height')
			.match(/\d+/)[0], 10);
		value = value + parseInt(window
			.getComputedStyle(foreground, null)
			.getPropertyValue('padding-top')
			.match(/\d+/)[0], 10);
		value = value + parseInt(window
			.getComputedStyle(foreground, null)
			.getPropertyValue('padding-bottom')
			.match(/\d+/)[0], 10);
		background.style.top = (-value).toString(10) + "px";
		background.style.height = value.toString(10) + "px";
	}
}

// for (let i = 0; i < blocks.length; i++) {
// 	const block = array[i];
// 	for (let j = 0; j < block.childNodes.length; j++) {
// 		const block_child = block.childNodes[j];
// 		if (block_child.className == "background") {
// 			for (let k = 1; k < Content[]; k++) {
// 				const element = array[k];
				
// 			}
// 		}
// 	}
// }
