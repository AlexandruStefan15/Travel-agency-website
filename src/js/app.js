function dropdown() {
	let elements = document.querySelectorAll(
		"footer .container .info-wrapper .footer-navigation .col h2"
	);

	elements.forEach((el) => {
		el.addEventListener("click", (e) => {
			let list = e.currentTarget.parentElement.children[1];
			list.classList.toggle("visible");
		});
	});
}
dropdown();

function hamburgerAnimation() {
	let hamburger = document.querySelector("header nav .hamburger-menu");
	let navMenu = document.querySelector("header nav .nav-menu");

	hamburger.addEventListener("click", () => {
		navMenu.classList.toggle("active");
		hamburger.classList.toggle("active");
	});
}
hamburgerAnimation();
