<template>
	<footer class="footer bg-base-200 p-10 text-base-content">
		<nav v-for="section in footerSections" :key="section.title">
			<h6 class="footer-title">{{ section.title }}</h6>
			<NuxtLink
				v-for="link in section.links"
				:key="link.text"
				:to="link.href"
				target="_blank"
				class="link-hover link"
				>{{ link.text }}</NuxtLink
			>
		</nav>
		<form @submit.prevent="submit">
			<h6 class="footer-title">Newsletter</h6>
			<fieldset class="form-control w-full md:w-80">
				<label class="label">
					<span class="label-text">Enter your email address</span>
				</label>
				<div class="join join-vertical md:join-horizontal">
					<input
						v-model="newsletterEmail"
						type="email"
						placeholder="username@site.com"
						class="input join-item input-bordered"
						required
					/>
					<button class="btn btn-primary join-item" type="submit">Subscribe</button>
				</div>
				<span v-if="errorMessage" class="text-red-500">{{ errorMessage }}</span>
			</fieldset>
		</form>
	</footer>
</template>

<script setup>
const footerSections = ref([
	{
		title: 'Services',
		links: [
			{ text: 'Branding', href: '#' },
			{ text: 'Design', href: '#' },
			{ text: 'Marketing', href: '#' },
			{ text: 'Advertisement', href: '#' }
		]
	},
	{
		title: 'Company',
		links: [
			{ text: 'About us', href: '#' },
			{ text: 'Contact', href: '#' },
			{ text: 'Jobs', href: '#' },
			{ text: 'Press kit', href: '#' }
		]
	},
	{
		title: 'Legal',
		links: [
			{ text: 'Terms of use', href: '#' },
			{ text: 'Privacy policy', href: '#' },
			{ text: 'Cookie policy', href: '#' }
		]
	}
])

const newsletterEmail = ref('')
const errorMessage = ref('')

const submit = async () => {
	if (!validateEmail(newsletterEmail.value)) {
		errorMessage.value = 'Please enter a valid email address.'
		return
	}
	errorMessage.value = ''
	const response = await $fetch('/api/newsletter', {
		method: 'POST',
		body: {
			email: newsletterEmail.value
		}
	})
	if (response.error) {
		errorMessage.value = response.error
	}
	if (response.success) {
		newsletterEmail.value = ''
	}
}

const validateEmail = (email) => {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return re.test(email)
}
</script>
