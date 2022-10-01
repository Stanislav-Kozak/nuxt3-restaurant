<template>
	<div class="book">
		<div class="container book__wrapper">
			<div class="book__title-wrapper">
				<h4 class="book__title">Celebrate at one of the finest restaurants.</h4>
				<p class="book__description">Only this month business lunch from $45</p>
			</div>
			<button class="button book__button">RESERVATION</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.book {
	margin-top: 120px;
	margin-left: auto;
	margin-right: auto;
	max-width: 1440px;
	height: 357px;

	background-image: url('./assets/images/static/book-a-table-background.png');

	&__wrapper {
		padding-top: 20px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		gap: 40px;

		@media (min-width: $lp-break-point) {
			padding-top: 80px;
			flex-direction: row;
			padding-left: 20px;
			padding-right: 20px;
		}
	}

	&__title-wrapper {
		max-width: 600px;
	}

	&__title {
		@include font-wsl-style(400, 30px, 34px);
		color: var(--primary-dark-color);
		text-align: center;

		@media (min-width: $lp-break-point) {
			@include font-wsl-style(400, 48px, 52px);
		}
	}

	&__description {
		margin-top: 20px;
		@include font-wsl-style(700, 22px, 33px);
		color: var(--white-font-color);
		text-align: center;

		@media (min-width: $lp-break-point) {
			margin-top: 20px;
			@include font-wsl-style(700, 22px, 28px);
		}
	}

	&__button {
		align-self: center;
	}
}
</style>
