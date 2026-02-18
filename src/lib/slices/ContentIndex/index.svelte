<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import { isFilled, type Content } from '@prismicio/client';
	import { PrismicRichText, type SliceComponentProps } from '@prismicio/svelte';
	import ContentList from './ContentList.svelte';

	type ContentIndexProps = {
    	slice: Content.ContentIndexSlice;
    	items: Content.BlogpostDocument[] | Content.ProjectDocument[];
	};
	const { slice, items }: ContentIndexProps = $props();

</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading class="mb-8" size="xl">
		{slice.primary.heading}
	</Heading>
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-invert prose-xl mb-10">
			<PrismicRichText field={slice.primary.description}/>
		</div>
	{/if}

	<ContentList fallbackItemImage={slice.primary.fallback_item_image} {items} viewMoreText={slice.primary.view_more_text}/>
</Bounded>
