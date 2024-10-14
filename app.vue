<template>
	<div>
		<NavigationBar ref="nav" />
		<NuxtPage
			:style="{
				'padding-top': `${navHeight}px`,
				'min-height': `calc(100dvh - ${footerHeight}px)`
			}"
		/>
		<PrimaryFooter ref="footer" />
	</div>
</template>

<script setup>
const nav = ref(null)
const footer = ref(null)
const { height: navHeight } = useElementSize(nav)
const { height: footerHeight } = useElementSize(footer)

provide('navHeight', navHeight)
provide('footerHeight', footerHeight)
</script>
