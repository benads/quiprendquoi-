require("babel-core/register");
require("babel-polyfill");

let pathName = window.location.pathname;

const url = `https://quiprendquoi-api.benjaminadida.fr${pathName}`;

fetch(url)
	.then(response => response.json())
	.then(response =>
		localStorage.setItem("initData", JSON.stringify(response.items)),
	);

let repeatCall = [];

setInterval(() => {
	fetch(url)
		.then(response => response.json())
		.then(response => {
			repeatCall.push(JSON.stringify(response.items));
			let repeatCallToString = repeatCall.toString();
			let initData = localStorage.getItem("initData");
			if (
				repeatCallToString !== initData &&
				repeatCallToString.length > initData.length
			) {
				localStorage.setItem("initData", repeatCall.toString());
				let item_created = response.items.length - 1;
				console.log("item_created");
				// Notification authorization
				Notification.requestPermission();
				response.items.map((item, index) => {
					if (index === item_created) {
						// Send notification if user accept
						new Notification(`Un nouvel item à été ajouté : ${item.name}`);
						createElement(item._id, item.name);
					}
				});
			}
		})
		.then(() => {
			document.querySelector(".lds-dual-ring").classList.remove("isVisible");
			document.querySelector(".lds-dual-ring").classList.add("none");
		});
	repeatCall.pop();
}, 5000);


console.log(pathName);

// Create element if new item added
let createElement = (itemId, itemName) => {
	console.log(`${url}/${itemId}?_method=DELETE`);
	let newDiv = document.createElement("div");
	let form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", `${pathName}/items/${itemId}?_method=DELETE`);
	let button = document.createElement("button");
	button.innerHTML = "Supprimez";
	button.setAttribute("type", "submit");

	form.appendChild(button);
	let newContent = document.createTextNode(itemName);
	newDiv.appendChild(newContent);
	newDiv.appendChild(form);
	let currentDiv = document.getElementById("lastNotification");
	currentDiv.appendChild(newDiv);
};
