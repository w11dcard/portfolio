import aboutData from "../data/aboutData.json"
import { aboutDataProps } from "../types/types"

export default function About() {
	return (
		<div id="about" className="flex flex-col items-center justify-center text-center">
			<strong className="title">About Me</strong>

			<div className="grid max-w-xl grid-cols-1">
				{aboutData.map((section: aboutDataProps) => (
					<div key={section.content}>
						<p className="text-sm md:text-base">{section.content}</p>

						<hr className="m-4 border-t border-accent opacity-50" />
					</div>
				))}
			</div>
		</div>
	)
}
