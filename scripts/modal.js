let closeModal = document.querySelector("#closeModal");
let nameModify = document.querySelector("#nameModify");
let authorModify = document.querySelector("#authorModify");
let dateModify = document.querySelector("#dateModify");
let btnUpdate = document.querySelector("#btnUpdate");

// btn.addEventListener("click", function() {
// 	modal.classList.toggle("isVisible");
// fetch(btn.getAttribute("data-url")).then(response => {
// 	response
// 		.json()
// 		.then(response => {
// 			nameModify.setAttribute("value", response.name);
// 			authorModify.setAttribute("value", response.author);
// 		})
// 			// .then(() => {
// 			// 	btnUpdate.addEventListener("click", function() {
// 			// 		fetch(btn.getAttribute("data-url") + "?_method=PATCH", {
// 			// 			body: JSON.stringify({
// 			// 				name: nameModify.value,
// 			// 				author: authorModify.value,
// 			// 				date: dateModify.value,
// 			// 			}),
// 			// 		});
// 			// 	});
// 			// });
// 	});
// });

closeModal.addEventListener("click", function() {
	modal.style.display = "none";
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btnModal");

btn.addEventListener("click", function() {
	modal.style.display = "block";
	fetch(btn.getAttribute("data-url")).then(response => {
		response.json().then(response => {
			nameModify.setAttribute("value", response.name);
			authorModify.setAttribute("value", response.author);
		});
	});
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
