import data from "../data/data.js";

var coordX = 0;
var coordY = 0;

function getProduct() {
	let para = new URLSearchParams(window.location.search);
	let id = para.get("product_id");
	let { products } = data;

	return products[id - 1];
}

function insertData() {
	let product = getProduct();

	let backgroundImage = (document.querySelector(
		"main .banner"
	).style.backgroundImage = `url(${product.main_image})`);
	let title = (document.querySelector(
		"main .banner .title h1"
	).textContent = `Calatorie spre ${product.location}`);
	let subtitle = (document.querySelector("main .banner .title h2").childNodes[2].textContent =
		product.country);
	let info = document.querySelectorAll("main .container .info-circuit li p");
	info[0].textContent = `${product.price} EURO`;
	info[1].textContent = product.date_departure;
	info[2].textContent = product.date_arrival;
	info[3].textContent = `${product.days} zile`;
	info[4].textContent = product.airport;
	let description = (document.querySelector(
		"main .container .main-col .product-description p"
	).textContent = product.description);
	let objectives = (document.querySelector(
		"main .container .main-col .objectives ul"
	).innerHTML = `${product.objectives.map((obj) => `<li>${obj}</li>`).join("")}`);
	let schedule = document.querySelector("main .container .main-col .schedule ul");
	let dates = getDatesInRange(
		new Date(product.date_departure.split(".").reverse().join(".")),
		new Date(product.date_arrival.split(".").reverse().join("."))
	);

	dates.forEach((date, i) => {
		schedule.innerHTML += `
    <li>
      <div class="day">
        <div class="header">
          <p class="date">${date}</p>
          <p class="location">${product.location}</p>
        </div>
        <div class="body">
          <ul>
            <li>
              <div class="image">
                <img src="/images/secondary/transport.png" alt="" />
              </div>
              <div class="wrapper">
                <p class="title">Transport</p>
                <p class="text">${i == 0 ? "Avion" : "Autocar"}</p>
              </div>
            </li>
            <li>
              <div class="image">
                <img src="/images/secondary/cazare.png" alt="" />
              </div>
              <div class="wrapper">
                <p class="title">Cazare</p>
                <p class="text">Hotel "Lorem ipsum"</p>
              </div>
            </li>
            <li>
              <div class="image"><img src="/images/secondary/masa.png" alt="" /></div>
              <div class="wrapper">
                <p class="title">Mese</p>
                <p class="text">Mic dejun</p>
              </div>
            </li>
            <li>
              <div class="image">
                <img src="/images/secondary/activitati.png" alt="" />
              </div>
              <div class="wrapper">
                <p class="title">Obiective si activitati</p>
                <ul class="list">
                  <li>Lorem ipsum dolor sit amet...</li>
                  <li>Lorem ipsum dolor sit...</li>
                  <li>Lorem ipsum dolor...</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="image">
                <img src="/images/secondary/optionale.png" alt="" />
              </div>
              <div class="wrapper">
                <p class="title">Optionale</p>
                <ul class="list">
                  <li>Lorem ipsum dolor sit amet...</li>
                  <li>Lorem ipsum dolor sit...</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer">
          <p class="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, magnam
            voluptates. Iusto inventore, ipsam beatae fugit cum ducimus accusamus
            ratione tempora saepe quo dolore iste deserunt ab reprehenderit ad,
            exercitationem facere blanditiis itaque autem numquam! Lorem ipsum dolor sit amet consectetur, adipisicing elit...
          </p>
        </div>
      </div>
      <hr>
    </li>
    `;
	});

	product.images.forEach((image, i) => {
		if (i > 0)
			document.querySelector(".slides-wrapper").innerHTML += `        
        <div class="slide">
          <img src=${image} alt="" />
        </div>
        `;
	});

	imageSlider();
}

insertData();

function imageSlider() {
	let navItems = [];

	function sliderNavigation() {
		let slides = document.querySelectorAll(".image-slider .slide");
		let navigation = document.querySelector(".slider-navigation");

		slides.forEach((slide) => {
			let item = document.createElement("span");
			navigation.append(item);
			navItems.push(item);
		});

		if (navigation.children.length > 0) navigation.children[0].classList.add("active");
		else return;
	}
	sliderNavigation();

	function sliderAnimation() {
		let slidesWrapper = document.querySelector(".slides-wrapper");
		let rightArrow = document.querySelector(".arrow-right");
		let leftArrow = document.querySelector(".arrow-left");
		let imageSlider = document.querySelector(".image-slider");
		let index = 1;
		let ok = 1;

		let startClone = slidesWrapper.children[0].cloneNode(true);
		let endClone = slidesWrapper.children[slidesWrapper.children.length - 1].cloneNode(true);
		slidesWrapper.append(startClone);
		slidesWrapper.prepend(endClone);
		let slides = document.querySelectorAll(".image-slider .slide");

		slides.forEach((slide, i) => {
			slide.style.transform = `translateX(-100%)`;
		});

		let autoplay = false;
		let pause = false;
		let loop;

		if (autoplay == true) start();

		navItems.forEach((item, i) => {
			item.addEventListener("click", () => {
				clearInterval(loop);

				let activeItem = document.querySelector(".slider-navigation span.active");
				let activeItemIndex = navItems.indexOf(activeItem);

				if (ok == 1) {
					slides.forEach((slide, y) => {
						if (i < activeItemIndex) {
							slide.style.transition = "transform 1s ease";
							slide.style.transform = `translateX(${-100 * (i + 1)}%)`;
							index = i + 1;

							navItems.forEach((item) => {
								if (item.classList.contains("active")) item.classList.remove("active");
							});

							if (index - 1 == slides.length - 2) navItems[0].classList.add("active");
							else navItems[index - 1].classList.add("active");
						} else if (i > activeItemIndex) {
							slide.style.transition = "transform 1s ease";
							slide.style.transform = `translateX(${-100 * (i + 1)}%)`;
							index = i + 1;

							navItems.forEach((item) => {
								if (item.classList.contains("active")) item.classList.remove("active");
							});

							if (index - 1 == slides.length - 2) navItems[0].classList.add("active");
							else navItems[index - 1].classList.add("active");
						}
					});
				}
			});
		});

		imageSlider.addEventListener("mouseover", () => {
			clearInterval(loop);
		});

		imageSlider.addEventListener("mouseout", start);

		rightArrow.addEventListener("click", () => {
			clearInterval(loop);

			if (ok == 1) {
				index++;
				slides.forEach((slide, i) => {
					slide.style.transition = "transform 1s ease";
					slide.style.transform = `translateX(${-100 * index}%)`;
				});

				navItems.forEach((item) => {
					if (item.classList.contains("active")) item.classList.remove("active");
				});

				if (index - 1 == slides.length - 2) navItems[0].classList.add("active");
				else navItems[index - 1].classList.add("active");
			}
		});

		leftArrow.addEventListener("click", () => {
			clearInterval(loop);

			if (ok == 1) {
				index--;
				slides.forEach((slide, i) => {
					slide.style.transition = "transform 1s ease";
					slide.style.transform = `translateX(${-100 * index}%)`;
				});

				navItems.forEach((item) => {
					if (item.classList.contains("active")) item.classList.remove("active");
				});

				if (index - 1 == -1) navItems[slides.length - 3].classList.add("active");
				else navItems[index - 1].classList.add("active");
			}
		});

		for (let i = 0; i < slides.length - 1; i++) {
			slides[i].addEventListener("transitionend", () => {
				ok = 1;

				if (index == slides.length - 1) {
					index = 1;
					slides.forEach((slide, i) => {
						slide.style.transition = "none";
						slide.style.transform = `translateX(${-100 * index}%)`;
					});
				} else if (index == 0) {
					index = slides.length - 2;
					slides.forEach((slide, i) => {
						slide.style.transition = "none";
						slide.style.transform = `translateX(${-100 * index}%)`;
					});
				}
			});
		}

		slides.forEach((slide) => {
			slide.addEventListener("transitionstart", () => {
				ok = 0;
			});
		});

		function start() {
			loop = setInterval(() => {
				if (ok == 1 && pause == false && autoplay == true) {
					index++;
					slides.forEach((slide, i) => {
						slide.style.transition = "transform 1s ease";
						slide.style.transform = `translateX(${-100 * index}%)`;
					});

					navItems.forEach((item) => {
						if (item.classList.contains("active")) item.classList.remove("active");
					});

					if (index - 1 == slides.length - 2) navItems[0].classList.add("active");
					else navItems[index - 1].classList.add("active");
				}

				if (document.hidden) pause = true;
				else pause = false;
			}, 6000);
		}
	}
	sliderAnimation();
}

function getDatesInRange(startDate, endDate) {
	let date1 = new Date(startDate);
	let date2 = new Date(endDate);
	const datesBetween = [];

	while (date1.getTime() <= date2.getTime()) {
		datesBetween.push(date1.toLocaleDateString());
		date1.setDate(date1.getDate() + 1);
	}

	console.log(datesBetween);
	return datesBetween;
}
