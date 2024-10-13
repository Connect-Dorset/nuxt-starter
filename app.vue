<template>
	<div>
		<NavigationBar />
		<NuxtPage
			:style="{ 'margin-top': `${navHeight}px`, 'min-height': `calc(100dvh - ${navHeight + footerHeight}px)` }"
		/>
		<PrimaryFooter />
	</div>
</template>

<script setup>
const navHeight = ref(0)
const footerHeight = ref(0)

provide('navHeight', navHeight)
provide('footerHeight', footerHeight)
onMounted(() => {
	navHeight.value = document.querySelector('header').clientHeight
	footerHeight.value = document.querySelector('footer').clientHeight
	window.addEventListener('resize', () => {
		navHeight.value = document.querySelector('header').clientHeight
		footerHeight.value = document.querySelector('footer').clientHeight
	})
})
</script>
