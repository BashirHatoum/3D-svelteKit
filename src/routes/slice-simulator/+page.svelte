<script>
	import { SliceSimulator, SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
</script>

<SliceSimulator let:slices background="#222222">
	<SliceZone {slices} {components} />
</SliceSimulator>
