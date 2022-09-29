<template>
	<teleport to="body">
		<div ref="dropdownMenu" :class="{ 'dropdown-menu--show': modelValue }" class="dropdown-menu">
			<div class="dropdown-menu__content">
				<div class="dropdown-menu__close-wrapper">
					<img class="header__logo-mobile" src="~/assets/image/static/logo-mobile.svg" alt="Logo" />
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

<style scoped></style>
