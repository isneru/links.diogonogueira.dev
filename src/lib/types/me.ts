import type { Routes } from "$lib/types"

export type Info = {
	img: string
	name: string
	imgAlt: string
}

export type Infos = {
	[key in Routes]: Info
}
