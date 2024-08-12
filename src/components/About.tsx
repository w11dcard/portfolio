import aboutData from "../data/aboutData.json"
import { aboutDataProps } from "../lib/types"

export default function About() {
	return (
		<div className="text-center">
			<div className="m-4">
				<strong className="title">About Me</strong>
			</div>

			<div className="m-8">
				{aboutData.map((section: aboutDataProps) => (
					<div>
						<p>{section.content}</p>
						<hr className="m-6 border-t border-accent" />
					</div>
				))}
			</div>
		</div>
	)
}
