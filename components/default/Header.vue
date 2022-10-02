<template>
	<header class="header">
		<div class="container header__wrapper">
			<img class="header__logo-desktop" src="~/assets/images/static/logo.svg" alt="Logo" />
			<img class="header__logo-mobile" src="~/assets/images/static/logo-mobile.svg" alt="Logo" />
			<div class="header__navigation-wrapper">
				<nav class="header__navigation-list">
					<a href="#Home"> Home </a>
					<a href="#Menu"> Menu </a>
					<a href="#About-us"> About us </a>
					<a href="#"> Booking </a>
					<a href="#">
						<img src="~/assets/images/static/cart.svg" alt="Cart" />
					</a>
				</nav>
				<div class="header__phone-wrapper">
					<a href="#" class="header__phone">
						<img class="header__phone-image" src="~/assets/images/static/phone.svg" alt="Phone" />
						+999-888-76-54
					</a>
					<p class="header__phone-description">Contact us for booking</p>
				</div>
				<AppButton class="header__button">RESERVATION</AppButton>
			</div>
			<BaseBurger v-model="isActiveMenu" />
		</div>
		<BaseDropdownMenu v-model="isActiveMenu" />
	</header>
</template>

<script setup lang="ts">
const isActiveMenu = ref(false)
</script>

<style scoped lang="scss">
.header {
	background: rgba(0, 0, 0, 0.15);
	z-index: 15;

	@media (max-device-width: 1024px) {
		position: sticky;
		top: 0;
	}

	&__logo-desktop {
		width: 100px;

		@media (max-device-width: 1024px) {
			display: none;
		}
	}

	&__logo-mobile {
		width: 52px;

		@media (min-device-width: 1024px) {
			display: none;
		}
	}

	&__wrapper {
		padding: 50px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-device-width: 1024px) {
			padding: 20px 40px;
		}
	}

	&__navigation-wrapper {
		display: flex;
		align-items: center;

		@media (max-device-width: 1024px) {
			display: none;
		}
	}

	&__navigation-list {
		display: flex;
		gap: 23px;
		padding: 20px 21px;
		border-right: 1px solid var(--white-font-color);

		@include font-wsl-style(700, 18px, 19px);
		color: var(--white-font-color);

		a:hover {
			cursor: pointer;
			color: var(--primary-color);
		}
	}

	&__phone-wrapper {
		margin-left: 34px;
		gap: 2px;
		display: flex;
		flex-direction: column;
	}

	&__phone {
		display: flex;
		align-items: center;
		gap: 8px;

		@include font-wsl-style(700, 18px, 25px);
		color: var(--white-font-color);
	}

	&__phone-description {
		color: var(--white-font-color);
		max-width: 150px;

		@include font-wsl-style(400, 16px, 19px);
	}

	&__button {
		margin-left: 32px;
	}

	&__burger {
		@media (min-width: 1024px) {
			display: none;
		}
	}
}
</style>
