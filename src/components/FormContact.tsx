'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { MailIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name is require.',
	}),
	email: z.string().email({ message: 'Must provide an email' }),
	message: z.string().min(2, {
		message: 'Message is require.',
	}),
});

export default function FormContact() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8  font-OpenSans sm:w-[50%]"
			>
				<h1 className="font-Baloo text-3xl font-semibold text-background">
					Get in Touch
				</h1>
				<div className="flex items-center gap-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem className="w-[50%]">
								<FormLabel className="text-background">
									Name
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Janelle French"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-[50%]">
								<FormLabel className="text-background">
									Email
								</FormLabel>
								<FormControl>
									<Input
										placeholder="jfrench@gmail.com"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-background">
								Message
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Tell me a little bit about the services"
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="bg-darkOrange text-background px-8 flex gap-2 hover:opacity-80 rounded-sm"
				>
					<span className="font-semibold text-base">Send</span>{' '}
					<MailIcon className="w-5" />
				</Button>
			</form>
		</Form>
	);
}
