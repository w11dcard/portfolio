import { Icon } from "@iconify/react"
import avatar from "/avatar.png"
import heroImage from "/heroImage.png"

export default function Hero() {
	return (
		<div className="card-shadow relative mb-8 flex h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="relative flex flex-col items-center p-4 md:flex-row-reverse lg:gap-32">
				<div className="relative flex w-full max-w-lg items-center justify-center md:w-1/2">
					<img src={heroImage} alt="Hero" className="hero-image icon" />
					<img src={avatar} alt="Avatar" className="hero-avatar card-shadow absolute left-0 top-0 mx-12" />
				</div>

				<div className="flex max-w-3xl flex-col items-center text-center font-platypi md:items-start md:text-left">
					<h1 className="my-4 text-5xl font-bold md:text-6xl">Hi, I'm Matheus!</h1>
					<h2 className="my-2 text-3xl font-bold">I'm a full-stack developer.</h2>
					<p className="my-4 max-w-md text-xl">
						This is my website, where you can learn about my work. Feel free to explore and connect!
					</p>

					<div className="flex gap-4 py-2 text-secondary">
						<a href="https://github.com/matimortari">
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
