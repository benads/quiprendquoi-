let closeModal = document.querySelector("#closeModalModify");
let nameModify = document.querySelector("#nameModify");
let authorModify = document.querySelector("#authorModify");
let dateModify = document.querySelector("#dateModify");
let btnUpdate = document.querySelector("#btnUpdate");

closeModal.addEventListener("click", function() {
	modal.style.display = "none";
});

let modal = document.getElementById("myModalModify");

let form = document.querySelector(".itemModify");
setInterval(() => {
	let btn = document.querySelectorAll(".btnItemModify");
	for (let index = 0; index < btn.length; index++) {
		const element = btn[index];

		element.addEventListener("click", function() {
			modal.style.display = "block";
			form.setAttribute("action", element.getAttribute("data-urlItem"));
		});
	}
}, 100);
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
