if (navigator.clipboard) {
	document.querySelectorAll("[data-clipboard]").forEach($clipboardEl => {
		let urlClipboard = document.querySelector(".clipboard");

		const $button = document.createElement("img");
		$button.setAttribute("src", "/images/copy.svg");
		$button.style.width = "30px";
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
			const $button = document.createElement("img");
			$button.setAttribute("src", "/images/tick.svg");
			$button.style.width = "30px";
			setTimeout(() => $button.setAttribute("src", "/images/copy.svg"), 2000);
		})
		.catch(err => console.warn(err));
	$button.setAttribute("src", "/images/tick.svg");
	setTimeout(() => $button.setAttribute("src", "/images/copy.svg"), 2000);
}
