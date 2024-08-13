import { Icon } from "@iconify/react"
import heroImage from "/heroImage.png"

export default function Hero() {
	return (
		<div className="card-shadow relative mb-8 flex h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="relative flex flex-col items-center gap-16 p-10 md:flex-row-reverse lg:gap-32">
				<div className="flex w-full max-w-xl items-center justify-center md:w-1/2">
					<img src={heroImage} alt="Matheus Mortari" className="hero-image card-shadow" />
				</div>

				<div className="flex max-w-3xl flex-col items-center text-center font-platypi md:items-start md:text-left">
					<h1 className="my-4 text-5xl font-bold md:text-6xl">Hi, I'm Matheus!</h1>
					<h2 className="my-2 text-3xl font-bold">I'm a full-stack developer.</h2>
					<p className="my-4 max-w-md text-xl">
						This is my website, where you can learn about my work. Feel free to explore and connect!
					</p>

					<div className="flex gap-4 py-4 text-secondary">
						<a href="https://github.com/w11dcard">
							<Icon icon="simple-icons:github" className="icon h-8 w-8" />
						</a>
						<a href="https://www.linkedin.com/in/matheus-mortari-19rt/">
							<Icon icon="simple-icons:linkedin" className="icon h-8 w-8" />
						</a>
						<a href="mailto:matheus.felipe.19rt@gmail.com">
							<Icon icon="simple-icons:gmail" className="icon h-8 w-8" />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
