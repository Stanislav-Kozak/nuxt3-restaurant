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
			<HomeMenu />
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
