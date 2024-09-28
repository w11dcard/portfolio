import aboutData from "../data/aboutData.json"
import { aboutDataProps } from "../lib/types"

export default function About() {
	return (
		<div id="about" className="flex flex-col items-center justify-center text-center">
			<strong className="title">About Me</strong>

			<div className="grid max-w-lg grid-cols-1">
				{aboutData.map((section: aboutDataProps) => (
					<div key={section.content}>
						<p>{section.content}</p>
						<hr className="m-6 border-t border-accent" />
					</div>
				))}
			</div>
		</div>
	)
}
