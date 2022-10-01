<template>
	<div class="about-us">
		<div class="about-us__card-wrapper">
			<div class="about-us__card">
				<img class="about-us__card-image" src="~/assets/images/static/dishes.svg" alt="Dishes" />
				<h4 class="about-us__card-title">Magic <strong>Atmosphere</strong></h4>
				<p class="about-us__card-description">
					In our establishment there is a magical atmosphere filled with delicious aromas.
				</p>
			</div>
			<div class="about-us__card">
				<img class="about-us__card-image" src="~/assets/images/static/dishes.svg" alt="Dishes" />
				<h4 class="about-us__card-title">Best Quality <strong>Food</strong></h4>
				<p class="about-us__card-description">The quality of our food&nbsp;is&nbsp;excellent!</p>
			</div>
			<div class="about-us__card">
				<img class="about-us__card-image" src="~/assets/images/static/dishes.svg" alt="Dishes" />
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
					founders unexpectedly. While walking through the forest, the creator of our restaurant got stuck hundreds of
					kilometers from the nearest settlement. Far from civilization and communication, they had to temporarily equip
					themselves with a simple life, get and cook their own food.
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
				<img class="about-us__image" src="~/assets/images/static/history-images.png" alt="Media image" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.about-us {
	margin-top: 220px;

	@media (min-width: $lp-break-point) {
		margin-top: 120px;
	}

	&__card-wrapper {
		display: flex;
		flex-direction: column;
		gap: 31px;

		@media (min-width: $lp-break-point) {
			flex-direction: row;
		}
	}

	&__card {
		padding: 48px 20px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #ffffff;
		box-shadow: 10px 10px 40px 20px rgba(0, 0, 0, 0.1);

		@media (min-width: 1024px) {
			flex: 1 1 33%;
		}
	}

	&__card-title {
		@include font-wsl-style(400, 20px, 24px);
		color: var(--secondary-black-font-color);

		@media (min-width: $lp-break-point) {
			@include font-wsl-style(400, 26px, 30px);
		}

		strong {
			color: var(--primary-light-color);
		}
	}

	&__card-description {
		margin-top: 10px;
		text-align: center;

		@include font-wsl-style(400, 18px, 22px);
		color: var(--secondary-font-color);

		@media (min-width: $lp-break-point) {
			@include font-wsl-style(400, 23px, 30px);
		}
	}

	&__about-wrapper {
		margin-top: 75px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 45px;

		@media (min-width: $lp-break-point) {
			margin-top: 150px;
			flex-direction: row;

			& div {
				flex: 1 1 50%;
			}
		}
	}

	&__history-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__history-title {
		@include font-wsl-style(400, 44px, 46px);
		text-align: center;

		@media (min-width: $lp-break-point) {
			@include font-wsl-style(400, 54px, 62px);
		}

		strong {
			color: var(--primary-dark-color);
		}
	}

	&__history-description {
		margin-top: 48px;
		@include font-wsl-style(400, 16px, 22px);
		text-align: center;
		color: var(--secondary-font-color);

		@media (min-width: $lp-break-point) {
			max-width: 444px;
			margin-top: 20px;
			@include font-wsl-style(400, 16px, 22px);
		}
	}

	&__history-stats {
		margin-top: 120px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 32px;

		@media (min-width: $lp-break-point) {
			margin-top: 100px;
			flex-direction: row;
			justify-content: center;
		}
	}

	&__stats-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__stats-number {
		@include font-wsl-style(400, 40px, 40px);
		color: var(--primary-light-color);
	}

	&__stats-label {
		margin-top: 8px;
		@include font-wsl-style(400, 22px, 22px);
	}

	&__image {
		max-width: 100%;
	}
}
</style>
