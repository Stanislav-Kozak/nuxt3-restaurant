<template>
	<div class="body">
		<DefaultHeader />
		<div class="content">
			<slot />
		</div>
		<DefaultFooter />
	</div>
</template>

<style scoped lang="scss">
.body {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	scroll-behavior: smooth;
}

.content {
	flex: 1 1 100%;
	width: 100%;
	z-index: 0;
}
</style>
