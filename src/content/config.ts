// 1. Import utilities from `astro:content`
import { Docs } from '@/lib/definitions';
import { defineCollection } from 'astro:content';

// 2. Define your collection(s)
const data = defineCollection({ type: 'data', schema: Docs });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"

export const collections = {
	cards: data,
};
