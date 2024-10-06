import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Stack from "./components/Stack"

export default function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<Hero />

			<main className="flex flex-1 flex-col p-4 md:flex-row">
				<div className="flex flex-1 flex-col">
					<About />
					<Stack />
				</div>

				<div className="flex flex-1 flex-col">
					<Projects />
				</div>
			</main>

			<Footer />
		</div>
	)
}
