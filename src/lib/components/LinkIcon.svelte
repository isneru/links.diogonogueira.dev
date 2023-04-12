<script lang="ts">
import type { Link } from "$lib/types"

export let icon: Link["icon"]
</script>

{#if icon}
	<svelte:component this={icon} />
{/if}
