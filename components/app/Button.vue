<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<style scoped lang="scss">
.button {
	background: var(--primary-color);
	border: none;
	padding: 14px 18px;

	white-space: nowrap;
	font-weight: 700;
	font-size: 14px;
	line-height: 19px;
	color: var(--white-font-color);

	&:hover {
		cursor: pointer;
		background: #ff8e38;
	}
}
</style>
