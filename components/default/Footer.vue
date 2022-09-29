<template>
	<footer class="footer">
		<div class="container footer__wrapper" style="color: white">
			<p class="footer__copyright">© <span>2022</span> Restaurant</p>
		</div>
	</footer>
</template>

<style lang="scss">
.footer {
	background: black;
	box-shadow: 0 -10px 40px -5px rgba(0, 0, 0, 0.56);

	&__wrapper {
		padding: 40px 0;

		@media (max-device-width: 1024px) {
			padding: 20px 40px;
		}
	}

	&__copyright {
		color: var(--white-font-color);
		z-index: 15;
	}
}
</style>
