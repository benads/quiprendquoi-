let partyUrlId = document.querySelector("#btn").getAttribute("data-url");
const url = `https://quiprendquoi-api.benjaminadida.fr/party/${partyUrlId}`;

setInterval(() => {
	let itemUrlId = document.querySelectorAll(".btnItem");
	for (let index = 0; index < itemUrlId.length; index++) {
		itemUrlId[index].addEventListener("click", function(e) {
			fetch(`${url}/items/${itemUrlId[index].getAttribute("data-url")}`, {
				method: "delete",
			});
		});
	}
}, 100);
