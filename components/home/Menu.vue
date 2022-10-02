<template>
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
					<AppButton class="menu__item-button">ORDER</AppButton>
				</div>
				<div class="menu__item-list">
					<div class="menu__image-wrapper">
						<img class="menu__item-image" src="~/assets/images/static/steak.jpg" alt="Ribeye steak" />
						<div class="menu__item-price">$76</div>
					</div>
					<h5 class="menu__item-name">Ribeye steak</h5>
					<p class="menu__item-description">
						Enjoy a real delicacy and exquisite taste! Ribeye steak, made from Black angus gobies, is distinguished by a
						high degree of marbling, which is formed due to small fat layers and resembles a marble pattern.
					</p>
					<AppButton class="menu__item-button">ORDER</AppButton>
				</div>
				<div class="menu__item-list">
					<div class="menu__image-wrapper">
						<img class="menu__item-image" src="~/assets/images/static/pork-ribs.jpg" alt="Pork ribs" />
						<div class="menu__item-price">$54</div>
					</div>
					<h5 class="menu__item-name">Pork ribs BBQ</h5>
					<p class="menu__item-description">
						These pork ribs are rubbed with a blend of earthy spices and brushed with a slowly simmered sauce that has a
						slight kick. They come off the grill tender yet pleasingly chewy, with just the right hit of smoky goodness.
					</p>
					<AppButton class="menu__item-button">ORDER</AppButton>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.menu {
	margin-top: 125px;
	height: 968px;
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	background-image: url('./assets/images/static/bar-background.png');
	background-repeat: no-repeat;
	background-position: center;

	&__wrapper {
		padding-top: 60px;
	}

	&__title {
		@include font-wsl-style(400, 46px, 54px);
		text-align: center;
		color: #ffffff;
	}

	&__list {
		margin-top: 100px;

		@media (min-width: $lp-break-point) {
			margin-top: 160px;
			display: flex;
			gap: 30px;
		}
	}

	&__item-list {
		flex: 1 1 33%;
		position: relative;
		padding: 80px 35px 30px;
		background: var(--white-font-color);
		display: none;
		flex-direction: column;
		align-items: center;

		@media (min-width: $lp-break-point) {
			display: flex;
		}

		&:first-child {
			display: flex;
		}
	}

	&__image-wrapper {
		position: relative;
	}

	&__item-image {
		border-radius: 50%;
		width: 200px;
		height: 200px;
	}

	&__item-recommended {
		padding: 8px 16px;
		position: absolute;
		border-radius: 0 0 15px 0;
		top: 0;
		left: 0;
		background: #ff6638;
		@include font-wsl-style(600, 16px, 20px);
		color: #ffffff;
	}

	&__item-price {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--primary-dark-color);
		border: 7px solid #ffffff;
		border-radius: 50%;
		width: 86px;
		height: 86px;
		bottom: -10px;
		right: -10px;

		@include font-wsl-style(400, 26px, 32px);
		color: var(--white-font-color);
	}

	&__item-name {
		margin-top: 12px;
		@include font-wsl-style(600, 22px, 26px);
		color: var(--main-font-color);
	}

	&__item-description {
		margin-top: 20px;
		margin-bottom: 20px;
		@include font-wsl-style(600, 18px, 22px);
		color: var(--main-font-color);
		text-align: center;
	}
	::v-deep(.button) {
		background: var(--primary-dark-color);
	}

	&__item-button {
		margin-top: auto;
		width: 100%;
		box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
	}
}
</style>
