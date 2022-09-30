<script setup lang="ts">
defineProps<{
	modelValue: boolean
}>()

defineEmits<{
	(e: 'update:modelValue', value: boolean): void
}>()
</script>
<template>
	<div
		ref="burger"
		:class="{ 'burger-active': modelValue }"
		class="burger"
		@click="$emit('update:modelValue', !modelValue)"
	>
		<span class="burger__line burger__line--first"></span>
		<span class="burger__line burger__line--second"></span>
		<span class="burger__line burger__line--third"></span>
		<span class="burger__line burger__line--fourth"></span>
	</div>
</template>

<style scoped lang="scss">
.burger {
	position: relative;
	width: 32px;
	height: 18px;

	&__line {
		display: block;
		position: absolute;
		width: 100%;
		height: 3px;
		border-radius: 5px;
		background: var(--primary-color);
		transition: all 0.4s ease-in-out;
	}

	&__line--first {
		top: 0;
	}

	&__line--second {
		top: 50%;
		transform: translateY(-50%);
	}

	&__line--third {
		top: 50%;
		transform: translateY(-50%);
	}

	&__line--fourth {
		bottom: 0;
	}
}

.burger-active {
	& .burger__line--first,
	.burger__line--fourth {
		opacity: 0;
	}

	& .burger__line--second {
		transform: translateY(-50%) rotate(45deg);
	}

	& .burger__line--third {
		transform: translateY(-50%) rotate(-45deg);
	}
}
</style>
