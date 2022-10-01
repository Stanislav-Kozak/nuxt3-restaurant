<template>
	<div>
		<div class="content__hero-image"></div>
		<main id="Home" class="content">
			<div class="container">
				<HomeWelcome />
				<HomeAboutUs />
			</div>
			<HomeBook />
			<HomeDishes />
			<div class="menu">
				<div class="container menu__wrapper">
					<h5 class="menu__title">Our Menu</h5>
					<div class="menu__list">
						<div class="menu__item-list">
							<div class="menu__item-recommended">Most popular</div>
							<div class="menu__image-wrapper">
								<img class="menu__item-image" src="~/assets/images/static/burger-menu.png" alt="Burger" />
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
								<img class="menu__item-image" src="~/assets/images/static/steak.jpg" alt="Ribeye steak" />
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
								<img class="menu__item-image" src="~/assets/images/static/pork-ribs.jpg" alt="Pork ribs" />
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

<style scoped lang="scss">
.content__hero-image {
	position: absolute;
	background-image: url('./assets/images/static/hero-image-header.png');
	background-repeat: no-repeat;
	background-position: center;
	z-index: -5;
	width: 100%;
	height: 800px;
	top: 0;
}
</style>
