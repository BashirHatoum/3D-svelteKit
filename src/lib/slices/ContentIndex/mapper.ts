import type { Client, Content, SliceMapper } from "@prismicio/client";
import ContentIndex from './index.svelte';
import type { ComponentProps } from "svelte";


type Context ={client: Client<Content.AllDocumentTypes>};
type ContentIndexProps = {
    slice: Content.ContentIndexSlice;
    items: Content.BlogpostDocument[] | Content.ProjectDocument[];
};
const mapper: SliceMapper<Content.ContentIndexSlice,ContentIndexProps, Context>=async ({slice,context}) => {
    const {client}=context;

    const items = slice.primary.content_type=='Blog' ? await client.getAllByType('blogpost') : await client.getAllByType('project');
    
    return {slice,items};

}

export default mapper;