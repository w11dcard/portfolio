import aboutData from "../data/aboutData.json"
import { aboutDataProps } from "../lib/types"

export default function About() {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<strong className="title">About Me</strong>

			<div className="m-8">
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
