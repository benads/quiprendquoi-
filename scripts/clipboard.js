if (navigator.clipboard) {
	document.querySelectorAll("[data-clipboard]").forEach($clipboardEl => {
		let urlClipboard = document.querySelector(".clipboard");
		const $button = document.createElement("button");
		let img = document.createElement("img");
		img.setAttribute("src", "/images/copy.svg");
		img.style.width = "30px";
		$button.appendChild(img);

		// $clipboardEl.parentNode.append($button);
		urlClipboard.appendChild($button);
		$button.addEventListener(
			"click",
			copyToClipboard.bind(this, $clipboardEl, $button),
		);
	});
} else {
	console.warn("Pas de support :(");
}

function copyToClipboard($clipboardEl, $button) {
	navigator.clipboard
		.writeText($clipboardEl.getAttribute("data-clipboard"))
		.then(() => {
			$button.innerHTML = "Copié !";
			setTimeout(() => ($button.innerHTML = "Copier"), 2000);
		})
		.catch(err => console.warn(err));
	$button.innerHTML = "Copié !";
	setTimeout(() => ($button.innerHTML = "Copier"), 2000);
}
