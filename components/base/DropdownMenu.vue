<template>
	<teleport to="body">
		<div ref="dropdownMenu" :class="{ 'dropdown-menu--show': modelValue }" class="dropdown-menu">
			<div class="dropdown-menu__content">
				<div class="dropdown-menu__close-wrapper">
					<img class="header__logo-mobile" src="~/assets/images/static/logo-mobile.svg" alt="Logo" />
					<div class="close-icon" @click="$emit('update:modelValue', false)">
						<span class="close-icon__line close-icon__line--first"></span>
						<span class="close-icon__line close-icon__line--second"></span>
					</div>
				</div>
				<div class="dropdown-menu__navigation-wrapper">
					<nav class="dropdown-menu__navigation-list">
						<a href="#Home"> HOME </a>
						<a href="#Menu"> MENU </a>
						<a href="#About-us"> ABOUT US </a>
						<a href="#"> BOOKING </a>
					</nav>
					<div class="dropdown-menu__phone-wrapper">
						<a href="tel:+999-888-76-54" class="dropdown-menu__phone"> +999-888-76-54 </a>
					</div>
					<button class="button dropdown-menu__button">RESERVATION</button>
				</div>
			</div>
		</div>
	</teleport>
</template>

<script setup lang="ts">
defineProps<{
	modelValue: boolean
}>()

defineEmits<{
	(e: 'update:modelValue'): boolean
}>()
</script>

<style scoped lang="scss">
.dropdown-menu {
	position: fixed;
	z-index: 50;
	top: 0;
	width: 100%;
	background: #ffffff;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);

	transition: all 0.3s ease-in-out;
	transform: translateY(-120%);

	@media (min-width: 1024px) {
		display: none;
	}

	&--show {
		transform: translateY(0);
	}

	&__content {
		padding: 26px 40px;
	}

	&__close-wrapper {
		display: flex;
		justify-content: space-between;
	}

	&__navigation-wrapper {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	&__navigation-list {
		display: flex;
		flex-direction: column;
		align-items: center;

		@include font-wsl-style(700, 22px, 24px);

		a {
			padding: 12px 0;
		}
	}

	&__phone-wrapper {
		align-self: center;
		@include font-wsl-style(700, 22px, 24px);
	}

	&__button {
		@include font-wsl-style(700, 22px, 24px);
	}
}

.close-icon {
	position: relative;
	width: 32px;
	height: 18px;

	&__line {
		display: inline-block;
		position: absolute;
		height: 3px;
		width: 100%;
		background: var(--primary-color);
		border-radius: 5px;
		top: 50%;
	}

	&__line--first {
		transform: translateY(50%) rotate(45deg);
	}

	&__line--second {
		transform: translateY(50%) rotate(-45deg);
	}
}
</style>
