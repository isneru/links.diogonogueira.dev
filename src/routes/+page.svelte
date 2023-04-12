<script lang="ts">
import Footer from "$lib/components/Footer.svelte"
import LinkIcon from "$lib/components/LinkIcon.svelte"
import { links, me } from "$lib/utils"
import type { PageData } from "./$types"

export let data: PageData
</script>

<main class="w-full max-w-[360px]">
	<section class="flex w-full flex-col items-center justify-center gap-5">
		<div class="h-36 w-36 rounded-full bg-primary-600 p-1 transition-colors hover:bg-primary-700">
			<img
				src={me[data.route].img}
				alt={me[data.route].imgAlt}
				class="rounded-full grayscale transition-opacity" />
		</div>
		<p class="text-3xl font-bold">{me[data.route].name}</p>
	</section>
	<div class="h-20" />
	<ul class="flex w-full flex-col items-center justify-center gap-3">
		{#each links[data.route] as link}
			<li class="w-full">
				<a
					class="flex w-full items-center justify-between rounded border-2 border-primary-600 bg-primary-500 px-2 py-3 text-lg font-semibold text-light transition-colors hover:border-primary-700 hover:bg-primary-600 dark:text-dark"
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
					>{link.text}
					{#if link.icon}
						<LinkIcon icon={link.icon} />
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</main>
<Footer />
