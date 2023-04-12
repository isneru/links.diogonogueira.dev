import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"

export const load = (async ({ cookies }) => {
	const now = new Date()
	const time = now.getTime()
	const expireTime = time + 1000 * 60 * 60 // 1 hour
	now.setTime(expireTime)

	if (!cookies.get("route")) {
		cookies.set("route", `/gaming; expires=${now.toUTCString()}`)
	}

	throw redirect(307, "/")
}) satisfies PageServerLoad
