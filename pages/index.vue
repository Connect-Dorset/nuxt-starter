<template>
	<main class="container mx-auto flex flex-col items-center justify-center gap-4 py-4">
		<h1>{{ config.public.websiteName }}</h1>
		<div class="collapse max-w-md bg-base-300">
			<input type="checkbox" />
			<div class="collapse-title text-center text-xl font-medium">Click me to show/hide content</div>
			<div class="col center collapse-content gap-2">
				<select v-model="$colorMode.preference" class="select select-bordered w-full max-w-xs">
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
	</main>
</template>

<script setup>
const config = useRuntimeConfig()
const themes = config.public.availableThemes
const colorOptions = ref(
	themes.map((theme) => ({ value: theme, text: theme.charAt(0).toUpperCase() + theme.slice(1) }))
)
</script>
