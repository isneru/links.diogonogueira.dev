import type { Links } from "$lib/types"

export const links: Links = {
	"/": [
		{
			text: "Github",
			href: "https://github.com/isneru",
			icon: await getIcon("Github")
		},
		{
			text: "Twitter",
			href: "https://twitter.com/nerudevs",
			icon: await getIcon("Twitter")
		},
		{
			text: "LinkedIn",
			href: "https://www.linkedin.com/in/diogoclanogueira",
			icon: await getIcon("LinkedIn")
		},
		{ text: "Portfolio", href: "https://diogonogueira.dev" }
	],
	"/gaming": [
		{ text: "Youtube", href: "https://www.youtube.com/@isneru", icon: await getIcon("Youtube") },
		{
			text: "Discord",
			href: "https://discord.com/users/268052453402869760",
			icon: await getIcon("Discord")
		},
		{ text: "Steam", href: "https://steamcommunity.com/id/isneru", icon: await getIcon("Steam") }
	]
	/* 	"/projects": [] */
}

async function getIcon(icon: string) {
	return await import(`$lib/components/icons/${icon}.svelte`).then(
		module => module.default as ConstructorOfATypedSvelteComponent
	)
}
