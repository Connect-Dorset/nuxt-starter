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
		<form>
			<h6 class="footer-title">Newsletter</h6>
			<fieldset class="form-control w-80">
				<label class="label">
					<span class="label-text">Enter your email address</span>
				</label>
				<div class="join">
					<input
						v-model="newsletterEmail"
						type="text"
						placeholder="username@site.com"
						class="input join-item input-bordered"
					/>
					<button class="btn btn-primary join-item" @click.prevent="submit">Subscribe</button>
				</div>
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

const submit = async () => {
	const response = await $fetch('/api/newsletter', {
		method: 'POST',
		body: {
			email: newsletterEmail.value
		}
	})
}
</script>
