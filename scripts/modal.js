let closeModal = document.querySelector("#closeModal");
let nameModify = document.querySelector("#nameModify");
let authorModify = document.querySelector("#authorModify");
let dateModify = document.querySelector("#dateModify");
let btnUpdate = document.querySelector("#btnUpdate");

closeModal.addEventListener("click", function() {
	modal.style.display = "none";
});

let modal = document.getElementById("myModal");

let btn = document.getElementById("btnModal");

// Modify Party
btn.addEventListener("click", function() {
	modal.style.display = "block";
	fetch(btn.getAttribute("data-url")).then(response => {
		response.json().then(response => {
			nameModify.setAttribute("value", response.name);
			authorModify.setAttribute("value", response.author);
		});
	});
});

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
