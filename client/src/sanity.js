import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

//writing VITE_ IS MUST IN VITE FOR .ENV
export const sanity=createClient({
    projectId:import.meta.env.VITE_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2024-03-29',
    useCdn:true,
    token:import.meta.env.VITE_APP_SANITY_TOKEN
})


const builder=imageUrlBuilder(sanity);

export const urlFor=(source)=>builder.image(source);