<template>
	<header class="fixed top-0 z-50 w-full p-2">
		<nav class="center mx-auto flex">
			<ul class="menu w-full gap-1 rounded-box bg-base-200 shadow-sm md:menu-horizontal md:w-auto">
				<li class="md:hidden">
					<details>
						<summary>
							<NuxtLink :to="currentPage.path" class="flex items-center gap-2">
								<Icon :name="currentPage.icon" class="h-5 w-5" />
								{{ currentPage.name }}
							</NuxtLink>
						</summary>
						<ul>
							<li v-for="page in otherPages" :key="page.path">
								<NuxtLink :to="page.path">
									<Icon :name="page.icon" class="h-5 w-5" />
									{{ page.name }}
								</NuxtLink>
							</li>
						</ul>
					</details>
				</li>
				<li v-for="page in pages" :key="page.path" class="hidden md:block">
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
const route = useRoute()

const pages = ref([
	{ name: 'Home', icon: 'heroicons:home', path: '/' },
	{ name: 'About', icon: 'heroicons:information-circle', path: '/about' },
	{ name: 'Contact', icon: 'heroicons:envelope', path: '/contact' }
])

const currentPage = computed(() => pages.value.find((page) => page.path === route.path) || pages.value[0])
const otherPages = computed(() => pages.value.filter((page) => page.path !== currentPage.value.path))
</script>
