import type { LayoutRouteId } from "../../routes/$types"

export type Routes = Exclude<LayoutRouteId, null>

export type Link = {
	text: string
	href: string
	icon?: () => Promise<typeof exports>
}

export type Links = {
	[key in Routes]: Link[]
}
