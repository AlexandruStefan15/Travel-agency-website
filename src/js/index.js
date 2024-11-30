/* import data from '../data/data.json' assert { type: "json" }; */
import data from "../data/data.js";

function productClick(el) {
	let para = new URLSearchParams();

	el.children[0].addEventListener("click", (e) => {
		para.append("product_id", el.id);
		location.href = "/pages/product.html?" + para.toString();
	});

	el.children[2].children[0].addEventListener("click", (e) => {
		para.append("product_id", el.id);
		location.href = "/pages/product.html?" + para.toString();
	});
}

function rangeSlider() {
	let progress = document.querySelector(".range-slider .progress");

	if (progress) {
		let range = document.querySelectorAll(".range-slider input");
		let priceInputs = document.querySelectorAll(".numberVal");
		let gap = 260;
		let minValue = parseInt(range[0].value);
		let maxValue = parseInt(range[1].value);

		range.forEach((input) => {
			input.addEventListener("input", (e) => {
				minValue = parseInt(range[0].value);
				maxValue = parseInt(range[1].value);

				progress.style.left = (minValue / range[0].max) * 100 + "%";
				progress.style.right = 100 - (maxValue / range[1].max) * 100 + "%";
				priceInputs[0].value = minValue;
				priceInputs[1].value = maxValue;

				if (maxValue - minValue < gap) {
					if (e.target.id == "price_range_min") {
						range[0].value = maxValue - gap;
						priceInputs[0].value = maxValue - gap;
					} else if (e.target.id == "price_range_max") {
						range[1].value = minValue + gap;
						priceInputs[1].value = minValue + gap;
					}
				}
			});
		});

		for (let i = 0; i < priceInputs.length; i++) {
			priceInputs[i].addEventListener("change", (e) => {
				if (Number(e.target.value) >= 0 && Number(e.target.value) <= 5000) {
					if (i == 0 && Number(e.target.value) < Number(priceInputs[1].value)) {
						range[i].value = e.target.value;
						let minValue = parseInt(range[0].value);
						progress.style.left = (minValue / range[0].max) * 100 + "%";
					} else if (i == 1 && Number(e.target.value) > Number(priceInputs[0].value)) {
						range[i].value = e.target.value;
						let maxValue = parseInt(range[1].value);
						progress.style.right = 100 - (maxValue / range[1].max) * 100 + "%";
					}
				}
			});
		}
	}
}
window.onload = rangeSlider();

function renderProducts() {
	let list = document.querySelector(".products .container ul");
	let { products } = data;

	if (list)
		products.forEach((product, i) => {
			let el = document.createElement("li");
			el.classList.add("product-card");
			el.id = product.id;
			el.innerHTML = `
        <div class="card-header"> 
          <a href="#"><img src=${product.images[0]} alt="" /></a>
        </div>
        <div class="card-body">
          <div class="col">
            <h2 class="location">${product.location}</h2>
            <div class="country">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
            <p>${product.country}</p>
            </div>
          </div>
          <div class="col">
            <p class="price">${product.price} €</p>
            <p class="date">${product.date_departure}</p>
          </div>
        </div>  
        <div class="card-footer">
          <a href="#">Vezi oferta<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 24h20v-14h-20v14zm4-11h12v1h-12v-1zm0 3h12v1h-12v-1zm0 3h12v1h-12v-1zm16-17v6h-20v-6h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h6v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-14 1c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm10 0c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg></a> 
          <span>Plecare din ${product.airport}</span>
        </div>
      `;
			list.append(el);
			productClick(el);
		});

	hideProducts(9);

	const elements = document.querySelectorAll(".products .container ul >li");
	let options = {
		root: null,
		rootMargin: "21%",
		threshold: 0.5,
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("visible");
			} else return;

			observer.unobserve(entry.target);
		});
	}, options);

	elements.forEach((element) => {
		observer.observe(element);
	});
}
renderProducts();

function hideProducts(x) {
	let list = document.querySelector(".products .container ul");

	if (list)
		if (list.children.length > 9) {
			for (let i = x; i < list.children.length; i++) {
				list.children[i].classList.remove("visible");
				list.children[i].classList.add("hide");
			}
		}
}

function showProducts() {
	let button = document.querySelector(
		"main section.products .container .see-more button"
	);
	let hiddenProducts = document.querySelectorAll(".products .container ul > li.hide");

	if (hiddenProducts.length <= 9) button.style.display = "none";
	else button.style.display = "block";

	hiddenProducts.forEach((product, i) => {
		if (i < 9) {
			product.classList.remove("hide");
		}
	});
}

function seeMoreProducts() {
	let button = document.querySelector(
		"main section.products .container .see-more button"
	);

	if (button)
		button.addEventListener("click", () => {
			showProducts();
		});
}
seeMoreProducts();

function noResults() {
	let products = document.querySelectorAll("ul.product-list > li");
	let container = document.querySelector("main section.products .container");
	let message = document.querySelector(
		"main section.products .container p.no-results-message"
	);

	if (products.length == 0) {
		container.classList.add("no-results");
		message.innerText = "Cautarea a generat 0 rezultate";
	} else {
		container.classList.remove("no-results");
		message.innerText = "";
	}
}

function filter() {
	let { products } = data;
	let seeMoreButton = document.querySelector(
		"main section.products .container .see-more button"
	);
	let form = document.querySelector("main .fullscreen-banner .info-banner form");
	let location = document.querySelector("main .info-banner form input#destination");
	let minPrice = document.querySelector(
		"main .info-banner form input.min_value.numberVal"
	);
	let maxPrice = document.querySelector(
		"main .info-banner form input.max_value.numberVal"
	);
	let departureBefore = document.querySelector("input#departure_before");
	let departureAfter = document.querySelector("input#departure_after");
	let ok = 0;

	if (form)
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			ok++;
			let nr = 0;
			let list = document.querySelector("ul.product-list");

			list.innerHTML = "";

			for (let i = 0; i < products.length; i++) {
				let condition1 =
					products[i].location.toLowerCase() == location.value.toLowerCase() ||
					products[i].country.toLowerCase() == location.value.toLowerCase() ||
					products[i].country.toLowerCase().includes(location.value.toLowerCase()) ||
					products[i].location.toLowerCase().includes(location.value.toLowerCase());
				let condition2 =
					Date.parse(products[i].date_departure.split(".").reverse().join("-")) >=
					Date.parse(departureAfter.value);
				let condition3 =
					Date.parse(products[i].date_departure.split(".").reverse().join("-")) <=
					Date.parse(departureBefore.value);
				let condition4 = products[i].price >= Number(minPrice.value);
				let condition5 = products[i].price <= Number(maxPrice.value);

				if (location.value == 0) condition1 = true;
				if (departureAfter.value == 0) condition2 = true;
				if (departureBefore.value == 0) condition3 = true;

				if (
					condition1 == true &&
					condition2 == true &&
					condition3 == true &&
					condition4 == true &&
					condition5 == true
				) {
					let el = document.createElement("li");
					el.classList.add("product-card");
					el.id = products[i].id;
					el.innerHTML = `
	       <div class="card-header">
		      <a href="#"><img src=${products[i].images[0]} alt="" /></a>
	       </div>
	       <div class="card-body">
		      <div class="col">
			      <h2 class="location">${products[i].location}</h2>
            <div class="country">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c3.196 0 6 2.618 6 5.602 0 3.093-2.493 7.132-6 12.661-3.507-5.529-6-9.568-6-12.661 0-2.984 2.804-5.602 6-5.602m0-2c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
			      <p>${products[i].country}</p>
            </div>
		      </div>
		      <div class="col">
			      <p class="price">${products[i].price} €</p>
            <p class="date">${products[i].date_departure}</p>
		      </div>
	       </div>  
         <div class="card-footer">
          <a href="#">Vezi oferta<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 24h20v-14h-20v14zm4-11h12v1h-12v-1zm0 3h12v1h-12v-1zm0 3h12v1h-12v-1zm16-17v6h-20v-6h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h6v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-14 1c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm10 0c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg></a> 
          <span>Plecare din ${products[i].airport}</span>
         </div>
         `;
					list.append(el);
					nr++;
					productClick(el);
				}
			}

			document.querySelector("main section.products .container h1").innerText =
				"Rezultatele cautarii:";
			noResults();

			hideProducts(9);

			let items = document.querySelectorAll("ul.product-list > li");
			if (items.length > 9) seeMoreButton.style.display = "block";
			else seeMoreButton.style.display = "none";

			const elements = document.querySelectorAll(".products .container ul >li");

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("visible");
							observer.unobserve(entry.target);
						}
					});
				},
				{
					rootMargin: "21%",
					threshold: 0.5,
				}
			);

			elements.forEach((element) => {
				observer.observe(element);
			});

			window.location.href = "#search-results";
		});
}
filter();
