<template>
	<div id="Menu" class="container dishes">
		<h5 class="dishes__title">Our <strong>Dishes</strong></h5>
		<div class="dishes__menu-wrapper">
			<div class="dishes__title-image"></div>
			<div class="dishes__menu-list">
				<div class="dishes__menu-item">
					<img class="dishes__item-image" src="~/assets/images/static/hamburger.png" alt="Hamburger" />
					<div class="dishes__name-wrapper">
						<span class="dishes__item-name"> Hamburger mini </span>
						<span class="dishes__item-dash"></span>
						<span class="dishes__item-price"> $15 </span>
					</div>
				</div>
				<div class="dishes__menu-item">
					<img class="dishes__item-image" src="~/assets/images/static/tacos.jpg" alt="Hamburger" />
					<div class="dishes__name-wrapper">
						<span class="dishes__item-name"> Tacos with chicken </span>
						<span class="dishes__item-dash"></span>
						<span class="dishes__item-price"> $25 </span>
					</div>
				</div>
				<div class="dishes__menu-item">
					<img class="dishes__item-image" src="~/assets/images/static/сaesar-salad.jpg" alt="Hamburger" />
					<div class="dishes__name-wrapper">
						<span class="dishes__item-name"> Caesar salad </span>
						<span class="dishes__item-dash"></span>
						<span class="dishes__item-price"> $22 </span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.dishes {
	padding-top: 60px;
	display: flex;
	flex-direction: column;

	&__title {
		align-self: center;
		max-width: 160px;
		@include font-wsl-style(400, 40px, 46px);
		text-align: center;
		color: var(--main-font-color);

		@media (min-width: 600px) {
			max-width: inherit;
		}

		strong {
			color: var(--primary-dark-color);
		}
	}

	&__title-image {
		width: 100%;
		max-width: 440px;
		height: 474px;
		background-image: url('./assets/images/static/pizza.png');
		background-repeat: no-repeat;
		border-radius: 15px;

		@media (min-width: $lp-break-point) {
			flex-direction: row;
			gap: 20px;
			height: auto;
		}
	}

	&__menu-wrapper {
		margin-top: 72px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 50px;

		@media (min-width: $lp-break-point) {
			flex-direction: row;
			align-items: inherit;
			gap: 20px;
		}
	}

	&__menu-list {
		display: flex;
		flex-direction: column;
		gap: 40px;

		@media (min-width: $lp-break-point) {
			flex: 1 1 100%;
		}
	}

	&__menu-item {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	&__name-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 6px;

		@include font-wsl-style(400, 22px, 24px);

		@media (min-width: $lp-break-point) {
			flex: 1 1 100%;
			flex-direction: row;

			@include font-wsl-style(400, 26px, 30px);
		}
	}

	&__item-dash {
		display: none;

		@media (min-width: $lp-break-point) {
			flex: 1 1 100%;
			display: inline-block;
			height: 1px;
			border-bottom: 1px dashed black;
		}
	}

	&__item-image {
		width: 130px;
		height: 130px;
		border-radius: 15px;
	}

	&__item-name {
		max-width: 350px;
		font-weight: 600;
		text-align: center;

		@media (min-width: $lp-break-point) {
			white-space: nowrap;
		}
	}
}
</style>
