export default function NavLinks() {
	return (
		<ul className="hidden md:flex justify-between gap-9 items-center font-Baloo text-xl pt-4 font-semibold">
			<li>
				<a className="hover:opacity-70" href="#services">
					Services
				</a>
			</li>
			<li>
				<a className="hover:opacity-70" href="#about">
					About
				</a>
			</li>
			<li>
				<a className="hover:opacity-70" href="">
					Testimonials
				</a>
			</li>
			<li>
				<a className="hover:opacity-70" href="">
					Podcast
				</a>
			</li>
			<li>
				<a
					className="bg-background text-darkGreen border border-darkGreen pt-[6px] px-4 rounded-tl-3xl rounded-br-3xl hover:bg-darkGreen hover:text-background transition-colors"
					href="#contact"
				>
					Contact
				</a>
			</li>
		</ul>
	);
}
