import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Stack from "./components/Stack"
import TopNav from "./components/TopNav"

export default function App() {
	return (
		<div className="flex min-h-screen flex-col">
			<TopNav />
			<Hero />

			<main className="flex flex-1">
				<div className="flex w-1/2 flex-col p-4">
					<About />
					<Stack />
				</div>

				<div className="flex w-1/2 flex-col p-4">
					<Projects />
				</div>
			</main>

			<Footer />
		</div>
	)
}
