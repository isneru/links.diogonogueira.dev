<script lang="ts">
export let icon: () => Promise<any>
</script>

{#await icon() then { default: icon }}
	<svelte:component this={icon} />
{/await}
