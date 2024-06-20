import { z } from 'zod';

export const CardInfoSchema = z.object({
	title: z.string(),
	text: z.string(),
	time: z.string(),
	info: z.object({
		couching: z.string().array(),
		translation: z.union([
			z.string().array(),
			z.object({ id: z.string(), data: z.string().array() }).array(),
		]),
	}),
});

export const StepsSchema = z.object({
	id: z.number(),
	title: z.string(),
	text: z.string(),
});
