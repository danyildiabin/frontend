const Content = [
	["Skills", "Networking", "C", "ZIG", "Artificial Intelligence", "Machine learning", "Embedded",
	"Making stuff", "Internet of Things", "OS Development", "Bots"],
	["Usually playing", "Dota 2", "CS:GO", "Apex Legends", "Ruletka Gabena", "Cyberpunk 2077", "Fall Bros", "Mini Motorways", "GTAV RP"],
	["Subs", "ssshitsshitshit", "skororassvetvyhodanet", "mr_monster228", "_depresivedays_",
	"rum.me_", "butyterv", "soft.lyy", "elen_chyk", "sopasoup_", "kontent_ot_dasha", "sunrayls",
	"thunder_gor", "_your_max_", "palitechno", "_don_juan_777_", "lyubov0323"],
];

let linked_lists = Array();
let row_speeds = Array();

document.addEventListener("DOMContentLoaded", (event) => {
	let main = document.getElementsByTagName("main")[0];
	for (let i = 0; i < Content.length; i++) {

		let mainblock = document.createElement("div");
		main.appendChild(mainblock);
		mainblock.classList.add('mainblock');

		let foreground = document.createElement("div");
		mainblock.appendChild(foreground);
		foreground.classList.add('foreground');

			let group_heading = document.createElement("h1");
			foreground.appendChild(group_heading);
			group_heading.innerHTML = Content[i][0];

		let background = document.createElement("div");
		mainblock.appendChild(background);
		background.classList.add('background');
		background.style.position = "relative";
		let value = parseInt(window
			.getComputedStyle(mainblock, null)
			.getPropertyValue('height')
			.match(/\d+/)[0], 10);
		background.style.top = (-value).toString(10) + "px";
		background.style.height = value.toString(10) + "px";

		let row = document.createElement("div");
		background.appendChild(row);
		row.classList.add('row');
		let text = document.createElement("h1");
		row.appendChild(text);
		text.innerHTML = "Test";

		let row_height = parseInt(window
			.getComputedStyle(row, null)
			.getPropertyValue('height')
			.match(/\d+/)[0], 10);

		text.remove();
		row.remove();

		let mainblock_height = parseInt(window
			.getComputedStyle(mainblock, null)
			.getPropertyValue('height')
			.match(/\d+/)[0], 10);

		let filled = 0;
		row_speeds.push(Array());
		while (filled < mainblock_height) {
			row1 = document.createElement("div");
			background.appendChild(row1);
			row1.classList.add('row');
			row_speeds[i].push(getRandomSpeed());
			filled = filled + row_height;
		}
	}
	for (let i1 = 0; i1 < Content.length; i1++) {
		const block = Content[i1];
		let prev_node = null;
		let first_node = null;
		for (let j1 = 1; j1 < block.length; j1++) {
			let node = new ListNode(block[j1]);
			if (prev_node != null) {
				prev_node.next = node;
			} else {
				first_node = node;
				linked_lists.push(new LinkedList(node));
			}
			if (j1 == block.length-1) {
				node.next = first_node;
			}
			prev_node = node;
		}
	}
	window.requestAnimationFrame(updateAnimations);
});

function getRandomSpeed() {
	var min = 1.250,
		max = 3.500;
	return Math.random() * (max - min) + min;
};

function updateAnimations() {
	let mainblocks = document.getElementsByClassName("mainblock");
	for (let i = 0; i < mainblocks.length; i++) {

		const mainblock = mainblocks[i];
		const container_width = parseFloat(window
			.getComputedStyle(mainblock, null)
			.getPropertyValue('width')
			.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);

		const rows = mainblock.getElementsByClassName("background")[0].getElementsByClassName("row");
		for (let j = 0; j < rows.length; j++) {
			const row = rows[j];
			let row_filled = 0;
			const texts = row.getElementsByTagName("h1");
			if (texts.length == 0) spawnBGText(row, linked_lists[i]);
			for (let k = 0; k < texts.length; k++) {
				const text = texts[k];

				let left = parseFloat(window
					.getComputedStyle(text, null)
					.getPropertyValue('left')
					.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
				let margin = parseFloat(window
					.getComputedStyle(text, null)
					.getPropertyValue('margin-left')
					.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
				let width = parseFloat(window
					.getComputedStyle(text, null)
					.getPropertyValue('width')
					.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);

				width = width + margin;
				row_filled = row_filled + width + margin;
				if (left > container_width + width - row_filled){
					text.remove();
				} else {
					// The actual move occurs here
					console.log(row_speeds[i])
					text.style.left = (left + row_speeds[i][j]).toString(10) + "px";
				}
			}

			let left = parseFloat(window
				.getComputedStyle(texts[0], null)
				.getPropertyValue('left')
				.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
			if (left > 0) {
				//console.log(i);
				spawnBGText(row, linked_lists[i]);	
			}

		}
	}
	window.requestAnimationFrame(updateAnimations);
}

// Implement linked list
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;               
    }
}

class LinkedList {
    constructor(first_node) {
        this.node = first_node;         
    }
	move(){
		this.node = this.node.next;
	}
	activeData(){
		return this.node.data;
	}
}

function spawnBGText(row, linkedlist) {
	let text = document.createElement("h1");
	let texts = row.getElementsByTagName("h1");
	if (texts.length == 0){
		row.appendChild(text);
	} else {
		row.insertBefore(text, texts[0]);
	}
	//console.log(node.value());
	text.innerHTML = linkedlist.activeData();
	linkedlist.move();
	let width = parseFloat(window
		.getComputedStyle(text, null)
		.getPropertyValue('width')
		.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
	let margin = parseFloat(window
		.getComputedStyle(text, null)
		.getPropertyValue('margin-left')
		.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
	text.style.left = (- width -margin).toString(10) + "px";
	if (texts.length > 1)
		for (let i = 1; i < texts.length; i++) {
			const element = texts[i];

			let element_width = parseFloat(window
				.getComputedStyle(element, null)
				.getPropertyValue('width')
				.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
			let element_margin = parseFloat(window
				.getComputedStyle(element, null)
				.getPropertyValue('margin-left')
				.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);
			let element_left = parseFloat(window
				.getComputedStyle(element, null)
				.getPropertyValue('left')
				.match(/[+-]?([0-9]*[.])?[0-9]+/)[0]);

			element.style.left = (element_left - width - 2 * margin).toString(10)+"px";
		}

}

window.onresize = setBackgroundSizes;
function setBackgroundSizes() {
	console.log("resize event");
	let main = document.getElementsByTagName("main");
	let mainblocks = main[0].getElementsByClassName("mainblock");
	for (let i = 0; i < mainblocks.length; i++) {
		let foreground = mainblocks[i].getElementsByClassName("foreground")[0];
		let background = mainblocks[i].getElementsByClassName("background")[0];
		let value = parseInt(window
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
