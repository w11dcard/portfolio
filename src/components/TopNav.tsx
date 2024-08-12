import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import logo from "/logo.png"

export default function TopNav() {
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<nav
			className={`fixed z-10 w-full rounded transition-colors duration-300 ${
				scrolled ? "bg-primary" : "bg-transparent"
			} ${window.innerWidth <= 768 ? "hidden" : ""}`}
		>
			<div className="flex items-center justify-between px-4">
				<img src={logo} alt="Logo" className="icon" />

				<div className="flex flex-row items-center justify-center space-x-6 font-semibold text-foreground">
					<a href="#about" className="flex flex-row items-center justify-center gap-2 hover:underline">
						<Icon icon="material-symbols:person-pin-rounded" className="icon h-6 w-6" />
						<p>About Me</p>
					</a>

					<a href="#footer" className="flex flex-row items-center justify-center gap-2 hover:underline">
						<Icon icon="material-symbols:chat-paste-go" className="icon h-6 w-6" />
						<p>Contact</p>
					</a>
				</div>
			</div>
		</nav>
	)
}
