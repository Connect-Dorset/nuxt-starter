<template>
	<main class="mx-auto flex flex-col items-center justify-center gap-4 px-4" :style="backgroundStyles">
		<div class="py-8">
			<div class="card glass bg-base-300/90 p-8 shadow-xl">
				<h1 v-motion-enter class="text-center">{{ config.public.websiteName }}</h1>
				<div class="collapse collapse-arrow max-w-md">
					<input v-motion-enter type="checkbox" />
					<div v-motion-enter class="collapse-title text-center text-xl font-medium">Theme</div>
					<div v-motion-enter class="col center collapse-content gap-2">
						<select v-model="$colorMode.preference" class="select select-bordered w-full bg-transparent">
							<option
								v-for="option in colorOptions"
								:key="option.value"
								:value="option.value"
								:selected="option.value === $colorMode.preference"
							>
								{{ option.text }}
							</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
const config = useRuntimeConfig()
const themes = config.public.availableThemes
const colorOptions = ref(
	themes.map((theme) => ({ value: theme, text: theme.charAt(0).toUpperCase() + theme.slice(1) }))
)

const img = useImage()
const backgroundStyles = computed(() => {
	const imgUrl = img(
		'https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?q=80',
		{ width: 'fill' },
		{
			placeholder: true,
			placeholderClass: 'skelton'
		}
	)
	return {
		backgroundImage: `url('${imgUrl}')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}
})
</script>
