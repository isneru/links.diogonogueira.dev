import type { Routes } from "$lib/types"
import type { PageServerLoad } from "./$types"

export const load = (async ({ cookies }) => {
	const routeCookie = cookies.get("route")

	let route: Routes = "/"

	if (routeCookie) {
		route = routeCookie.split(";")[0] as Routes
	}

	return {
		route
	}
}) satisfies PageServerLoad
