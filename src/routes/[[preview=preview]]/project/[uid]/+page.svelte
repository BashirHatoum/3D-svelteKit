<script lang="ts">
	import type { PageProps } from './$types';
	import ContentBody from '$lib/components/ContentBody.svelte';

	const { data }: PageProps = $props();
</script>

<ContentBody page={data.page} />