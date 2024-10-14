<template>
	<main class="mx-auto flex flex-col items-center justify-center gap-4 px-4" :style="backgroundStyles">
		<div class="py-8">
			<div class="card glass bg-base-300/90 p-8 shadow-xl">
				<h1 v-motion-enter class="text-center">Contact Us</h1>
				<p v-motion-enter class="text-center">
					Welcome to our website. We are dedicated to providing the best service possible.
				</p>
			</div>
		</div>
	</main>
</template>

<script setup>
const img = useImage()
const backgroundStyles = computed(() => {
	const imgUrl = img(
		'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80',
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
