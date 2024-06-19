// 1. Import utilities from `astro:content`
import { CardInfoSchema, StepsSchema } from '@/lib/definitions';
import { defineCollection } from 'astro:content';

// 2. Define your collection(s)
const cardInfo = defineCollection({ type: 'data', schema: CardInfoSchema });
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
const steps = defineCollection({ type: 'data', schema: StepsSchema });

export const collections = {
	cards: cardInfo,
	steps: steps,
};
