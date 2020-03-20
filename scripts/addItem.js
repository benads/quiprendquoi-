let partyUrlId = document.querySelector("#btn").getAttribute("data-url");

const url = `http://bastiencalou.fr:3000/party/${partyUrlId}`;

document.querySelector("#btn").addEventListener("click", function(e) {
	fetch(`${url}/items`, {
		method: "post",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},

		//make sure to serialize your JSON body
		body: JSON.stringify({
			name: document.querySelector("#name").value,
			author: document.querySelector("#user").value,
		}),
	})
		.then(() => {
			document.querySelector(".lds-dual-ring").classList.remove("none");
			document.querySelector(".lds-dual-ring").classList.add("isVisible");
		})
		.then(() => {
			console.log("ok");
		});
});
