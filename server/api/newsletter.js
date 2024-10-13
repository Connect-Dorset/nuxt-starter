import { promises as fs } from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
	const body = await readBody(event)
	const email = body.email

	// Validate the email
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}

	if (!validateEmail(email)) {
		throw createError({
			statusCode: 400,
			statusMessage: 'Invalid email address'
		})
	}

	const filePath = path.resolve('storage/entries.json')
	let emails = []

	try {
		const data = await fs.readFile(filePath, 'utf-8')
		emails = JSON.parse(data)
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error
		}
	}

	emails.push(email)

	await fs.writeFile(filePath, JSON.stringify(emails, null, 2), 'utf-8')

	return { success: true }
})
