import { Icon } from "@iconify/react"
import heroImage from "/heroImage.png"

export default function Hero() {
	return (
		<section className="flex h-screen flex-col-reverse items-center justify-center px-8 lg:flex-row" id="hero">
			<div className="absolute bottom-6 right-6 flex gap-6">
				<a href="https://github.com/w11dcard">
					<Icon className="icon h-8 w-8" icon="simple-icons:github" />
				</a>
				<a href="https://www.linkedin.com/in/matheus-mortari-19rt/">
					<Icon className="icon h-8 w-8" icon="simple-icons:linkedin" />
				</a>
				<a href="mailto:matheus.felipe.19rt@gmail.com">
					<Icon className="icon h-8 w-8" icon="simple-icons:gmail" />
				</a>
			</div>

			<div className="hero-animation" />

			<img
				className="card-shadow hero-image mx-auto w-full max-w-xs lg:max-w-md"
				src={heroImage}
				alt="Matheus Mortari"
			/>

			<div className="mb-12 text-center lg:text-left">
				<strong className="font-platypi text-3xl md:text-5xl lg:text-6xl">Hi, I'm Matheus! 👋🏻</strong>
				<p className="text-md mt-4 lg:w-5/6 lg:text-xl">
					I'm a full-stack web developer, and this is my website, where you can learn more about my work. Feel free to
					explore and connect if you'd like to!
				</p>
			</div>
		</section>
	)
}
