let btn = document.querySelector("#btnModal");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector("#closeModal");
let nameModify = document.querySelector("#nameModify");
let authorModify = document.querySelector("#authorModify");
let dateModify = document.querySelector("#dateModify");
let btnUpdate = document.querySelector("#btnUpdate");

btn.addEventListener("click", function() {
	modal.classList.toggle("isVisible");
	fetch(btn.getAttribute("data-url")).then(response => {
		response
			.json()
			.then(response => {
				nameModify.setAttribute("value", response.name);
				authorModify.setAttribute("value", response.author);
			})
			// .then(() => {
			// 	btnUpdate.addEventListener("click", function() {
			// 		fetch(btn.getAttribute("data-url") + "?_method=PATCH", {
			// 			body: JSON.stringify({
			// 				name: nameModify.value,
			// 				author: authorModify.value,
			// 				date: dateModify.value,
			// 			}),
			// 		});
			// 	});
			// });
	});
});

closeModal.addEventListener("click", function() {
	modal.classList.toggle("isVisible");
});
