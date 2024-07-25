import { useEffect, useState } from "react"
import logo from "/logo.png"

export default function TopNav() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrolled = window.scrollY > 0
			setIsScrolled(scrolled)
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<nav className={`${isScrolled ? "hidden" : "topnav-container"}`} id="topnav">
			<div className="flex h-16 w-full items-center justify-between p-4">
				<a className="icon" href="">
					<img src={logo} alt="Logo" className="hidden md:block" />
				</a>

				<div className="hidden md:block">
					<a className="p-4 font-semibold text-foreground hover:text-primary" href="#projects">
						Projects
					</a>
					<a className="p-4 font-semibold text-foreground hover:text-primary" href="#about">
						About Me
					</a>
					<a className="p-4 font-semibold text-foreground hover:text-primary" href="#footer">
						Contact
					</a>
				</div>
			</div>
		</nav>
	)
}
