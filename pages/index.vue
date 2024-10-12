<template>
	<main class="container mx-auto flex flex-col items-center justify-center gap-4 py-4 md:gap-2">
		<h1>
			Color mode: <span class="capitalize">{{ $colorMode.value }}</span>
		</h1>
		<select class="select select-bordered w-full max-w-xs" v-model="$colorMode.preference">
			<option selected value="light">Light</option>
			<option value="dark">Dark</option>
			<option value="night">Night</option>
		</select>
		<button class="btn" @click="value++">Button: {{ value }}</button>
	</main>
</template>

<script setup>
const colorMode = useColorMode()
const value = ref(0)
</script>
