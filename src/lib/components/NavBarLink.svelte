<script lang="ts">
	import { page } from "$app/state";
	import  {asLink, type KeyTextField, type LinkField } from "@prismicio/client";
	import { PrismicLink } from "@prismicio/svelte";

    let {field, label, onLinkClick, type}:
    {
        field: LinkField, 
        label: KeyTextField, 
        onLinkClick: (event:MouseEvent)=>void, 
        type: 'desktop' | 'mobile'
    } = $props();

    const isActive = $derived(() => {
	    const path = asLink(field);
        return !!(
            path &&
            page.url.pathname.includes(path)
        );
    });
</script>

{#if type==='desktop'}
    <PrismicLink {field} class="group relative block overflow-hidden rounded px-3 py-1 text-base font-bold
    text-slate-900" onclick={onLinkClick} aria-current={isActive()? 'page' : undefined} >
        <span class={`absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform 
        duration-300 ease-in-out group-hover:translate-y-0 ${isActive() ? 'translate-y-6' : 'translate-y-8'}`}></span>
        <sapn class="relative">
            {label}
        </sapn>
    </PrismicLink>

{:else}
    <PrismicLink {field} class="group relative block overflow-hidden rounded px-3 text-3xl font-bold
    text-slate-900" onclick={onLinkClick} aria-current={isActive()? 'page' : undefined} >
        <span class={`absolute inset-0 z-0 h-full rounded bg-yellow-300 transition-transform 
        duration-300 ease-in-out group-hover:translate-y-0 ${isActive() ? 'translate-y-6' : 'translate-y-16'}`}></span>
        <sapn class="relative">
            {label}
        </sapn>
    </PrismicLink>


{/if}