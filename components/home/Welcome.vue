<template>
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
</template>

<script></script>

<style scoped lang="scss">
.welcome {
	margin-top: 210px;

	@media (min-width: $lp-break-point) {
		margin-top: 150px;
		display: inline-block;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__title {
		color: var(--primary-dark-color);
		text-align: center;

		&--desktop {
			display: none;

			@media (min-width: $lp-break-point) {
				display: block;
			}
		}

		&--mobile {
			@media (min-width: $lp-break-point) {
				display: none;
			}
		}

		h2 {
			@include font-wsl-style(400, 30px, 34px);

			@media (min-width: $lp-break-point) {
				@include font-wsl-style(400, 48px, 57px);
			}
		}

		h3 {
			margin-top: 4px;
			@include font-wsl-style(400, 36px, 42px);

			@media (min-width: $lp-break-point) {
				@include font-wsl-style(400, 72px, 86px);
			}
		}
	}

	&__description {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 12px;
		text-align: center;
		@include font-wsl-style(400, 15px, 20px);
		color: var(--white-font-color);
	}

	&__horizontal-line {
		display: inline-block;
		height: 2px;
		width: 60px;
		background: var(--white-font-color);
	}

	&__button {
		margin-top: 20px;
	}
}
</style>
