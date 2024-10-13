<template>
	<header class="fixed top-0 z-50 w-full p-2">
		<nav class="center mx-auto flex">
			<ul class="menu w-full gap-1 rounded-box bg-base-200 shadow-sm md:menu-horizontal md:w-auto">
				<li v-for="page in pages" :key="page.path">
					<NuxtLink :to="page.path">
						<Icon :name="page.icon" class="h-5 w-5" />
						{{ page.name }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
const pages = ref([
	{ name: 'Home', icon: 'heroicons:home', path: '/' },
	{ name: 'About', icon: 'heroicons:information-circle', path: '#' },
	{ name: 'Contact', icon: 'heroicons:envelope', path: '#' }
])
</script>
