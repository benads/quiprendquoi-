let partyUrlId = document.querySelector("#btn").getAttribute("data-url");
let itemUrlId = document.querySelectorAll(".btnItem");
const url = `https://quiprendquoi-api.benjaminadida.fr/party/${partyUrlId}`;

for (let index = 0; index < itemUrlId.length; index++) {
	itemUrlId[index].addEventListener("click", function(e) {
		fetch(`${url}/items/${itemUrlId[index].getAttribute("data-url")}`, {
			method: "delete",
		})
	});
}

