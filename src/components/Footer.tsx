import { Icon } from "@iconify/react"
import logo from "/logo.png"

export default function Footer() {
	return (
		<footer className="card-shadow footer-container mt-16" id="footer">
			<img className="icon h-20 w-20" src={logo} alt="Logo" />

			<ul className="m-4 flex justify-center gap-4">
				<a href="https://github.com/w11dcard">
					<Icon className="icon h-6 w-6 text-secondary" icon="simple-icons:github" />
				</a>
				<a href="https://www.linkedin.com/in/matheus-mortari-19rt/">
					<Icon className="icon h-6 w-6 text-secondary" icon="simple-icons:linkedin" />
				</a>
				<a href="mailto:matheus.felipe.19rt@gmail.com">
					<Icon className="icon h-6 w-6 text-secondary" icon="simple-icons:gmail" />
				</a>
			</ul>

			<p className="text-center text-xs">
				Icons provided by <a href="https://iconify.design/">Iconify Design.</a>
			</p>
			<p className="text-center text-xs">© 2024 Matheus Mortari. All rights reserved.</p>
		</footer>
	)
}
