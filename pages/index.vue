<template>
	<div>
		<div class="content__hero-image"></div>
		<main id="Home" class="content">
			<div class="container">
				<div class="welcome">
					<div class="welcome__wrapper">
						<div class="welcome__title welcome__title--mobile">
							<h2>Welcome to</h2>
							<h3>Restaurant</h3>
						</div>
						<div class="welcome__title welcome__title--desktop">
							<h2>Welcome to</h2>
							<h3>Restaurant</h3>
						</div>
						<p class="welcome__description">
							<span class="welcome__horizontal-line"></span>
							HOUSE OF THE BEST FOOD
							<span class="welcome__horizontal-line"></span>
						</p>
						<button class="button welcome__button">VIEW MENU</button>
					</div>
				</div>
				<div id="About-us" class="about-us">
					<div class="about-us__card-wrapper">
						<div class="about-us__card">
							<img class="about-us__card-image" src="~/assets/image/static/dishes.svg" alt="Dishes" />
							<h4 class="about-us__card-title">Magic <strong>Atmosphere</strong></h4>
							<p class="about-us__card-description">
								In our establishment there is a magical atmosphere filled with delicious aromas.
							</p>
						</div>
						<div class="about-us__card">
							<img class="about-us__card-image" src="~/assets/image/static/dishes.svg" alt="Dishes" />
							<h4 class="about-us__card-title">Best Quality <strong>Food</strong></h4>
							<p class="about-us__card-description">The quality of our food&nbsp;is&nbsp;excellent!</p>
						</div>
						<div class="about-us__card">
							<img class="about-us__card-image" src="~/assets/image/static/dishes.svg" alt="Dishes" />
							<h4 class="about-us__card-title">Cheap <strong>Food</strong></h4>
							<p class="about-us__card-description">
								The cost of our Food depends only on its quantity. The quality is always top notch!
							</p>
						</div>
					</div>
					<div class="about-us__about-wrapper">
						<div class="about-us__history-wrapper">
							<h4 class="about-us__history-title">Our <strong>Story</strong></h4>
							<p class="about-us__history-description">
								Like any other original place, we have our own, special history. The idea of the restaurant came to the
								founders unexpectedly. While walking through the forest, the creator of our restaurant got stuck
								hundreds of kilometers from the nearest settlement. Far from civilization and communication, they had to
								temporarily equip themselves with a simple life, get and cook their own food.
							</p>
							<div class="about-us__history-stats">
								<div class="about-us__stats-wrapper">
									<strong class="about-us__stats-number">93</strong>
									<p class="about-us__stats-label">Beverages</p>
								</div>
								<div class="about-us__stats-wrapper">
									<strong class="about-us__stats-number">206</strong>
									<p class="about-us__stats-label">Dishes</p>
								</div>
								<div class="about-us__stats-wrapper">
									<strong class="about-us__stats-number">71</strong>
									<p class="about-us__stats-label">Snacks</p>
								</div>
							</div>
						</div>
						<div class="about-us__image-wrapper">
							<img class="about-us__image" src="~/assets/image/static/history-images.png" alt="Media image" />
						</div>
					</div>
				</div>
			</div>
			<div class="book">
				<div class="container book__wrapper">
					<div class="book__title-wrapper">
						<h4 class="book__title">Celebrate at one of the finest restaurants.</h4>
						<p class="book__description">Only this month business lunch from $45</p>
					</div>
					<button class="button book__button">RESERVATION</button>
				</div>
			</div>
			<div id="Menu" class="container dishes">
				<h5 class="dishes__title">Our <strong>Dishes</strong></h5>
				<div class="dishes__menu-wrapper">
					<div class="dishes__title-image"></div>
					<div class="dishes__menu-list">
						<div class="dishes__menu-item">
							<img class="dishes__item-image" src="~/assets/image/static/hamburger.png" alt="Hamburger" />
							<div class="dishes__name-wrapper">
								<span class="dishes__item-name"> Hamburger mini </span>
								<span class="dishes__item-dash"></span>
								<span class="dishes__item-price"> $15 </span>
							</div>
						</div>
						<div class="dishes__menu-item">
							<img class="dishes__item-image" src="~/assets/image/static/tacos.jpg" alt="Hamburger" />
							<div class="dishes__name-wrapper">
								<span class="dishes__item-name"> Tacos with chicken </span>
								<span class="dishes__item-dash"></span>
								<span class="dishes__item-price"> $25 </span>
							</div>
						</div>
						<div class="dishes__menu-item">
							<img class="dishes__item-image" src="~/assets/image/static/сaesar-salad.jpg" alt="Hamburger" />
							<div class="dishes__name-wrapper">
								<span class="dishes__item-name"> Caesar salad </span>
								<span class="dishes__item-dash"></span>
								<span class="dishes__item-price"> $22 </span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="menu">
				<div class="container menu__wrapper">
					<h5 class="menu__title">Our Menu</h5>
					<div class="menu__list">
						<div class="menu__item-list">
							<div class="menu__item-recommended">Most popular</div>
							<div class="menu__image-wrapper">
								<img class="menu__item-image" src="~/assets/image/static/burger-menu.png" alt="Burger" />
								<div class="menu__item-price">$42</div>
							</div>
							<h5 class="menu__item-name">Hamburger maxi</h5>
							<p class="menu__item-description">
								Big cutlet, mix of vegetables, incredibly crispy bun with a special sauce inside
							</p>
							<button class="button menu__item-button">ORDER</button>
						</div>
						<div class="menu__item-list">
							<div class="menu__image-wrapper">
								<img class="menu__item-image" src="~/assets/image/static/steak.jpg" alt="Ribeye steak" />
								<div class="menu__item-price">$76</div>
							</div>
							<h5 class="menu__item-name">Ribeye steak</h5>
							<p class="menu__item-description">
								Enjoy a real delicacy and exquisite taste! Ribeye steak, made from Black angus gobies, is distinguished
								by a high degree of marbling, which is formed due to small fat layers and resembles a marble pattern.
							</p>
							<button class="button menu__item-button">ORDER</button>
						</div>
						<div class="menu__item-list">
							<div class="menu__image-wrapper">
								<img class="menu__item-image" src="~/assets/image/static/pork-ribs.jpg" alt="Pork ribs" />
								<div class="menu__item-price">$54</div>
							</div>
							<h5 class="menu__item-name">Pork ribs BBQ</h5>
							<p class="menu__item-description">
								These pork ribs are rubbed with a blend of earthy spices and brushed with a slowly simmered sauce that
								has a slight kick. They come off the grill tender yet pleasingly chewy, with just the right hit of smoky
								goodness.
							</p>
							<button class="button menu__item-button">ORDER</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>
