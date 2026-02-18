<script lang="ts">
	import  { type KeyTextField, type LinkField } from "@prismicio/client";
    import IconArrow from '~icons/ic/baseline-arrow-outward'
	import { PrismicLink } from "@prismicio/svelte";
    let {linkField, label,showIcon=true,  class:className = ""}: {linkField:LinkField, label:KeyTextField, showIcon?:boolean, class?:string}=$props();
</script>

<PrismicLink field={linkField} class={`group text-slate-900 relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50 
px-4 py-3 font-bold transition-transform ease-out hover:scale-105 ${className} `}>

<span class={`absolute inset-0 z-0 h-full rounded group-hover:bg-yellow-300 translate-y-9  transition-transform 
        duration-300 ease-in-out group-hover:translate-y-0 }`}></span>
        <span class="relative justify-center flex items-center gap-2">
            {label}

            {#if showIcon}
            <IconArrow />
                
            {/if}
        </span>

</PrismicLink>