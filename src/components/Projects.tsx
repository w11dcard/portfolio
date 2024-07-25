import { Icon } from "@iconify/react"
import projectsData from "../data/projectsData.json"

export interface Project {
	title: string
	imageSrc: string
	description: string
	skills: string[]
	demo: string
	source: string
}

export default function Projects() {
	return (
		<div className="card-shadow container mx-auto flex flex-col items-center py-10 lg:px-20" id="projects">
			<div className="flex flex-col items-center text-center">
				<strong className="title">Projects</strong>
				<p className="subtitle">Projects that I'm proud of.</p>
			</div>

			<div className="mb-12 grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{projectsData.map((project: Project) => (
					<div key={project.title} className="card-shadow rounded-xl p-2">
						<a href={project.demo} target="_blank" rel="noopener noreferrer">
							<img className="h-52 w-full rounded-2xl object-cover" src={project.imageSrc} alt={project.title} />
						</a>

						<div className="mt-4 flex flex-row items-center justify-center gap-2 text-center">
							<strong className="font-platypi text-2xl">{project.title} ·</strong>
							<a className="icon" href={project.source} target="_blank" rel="noopener noreferrer">
								<Icon icon="simple-icons:github" className="h-7 w-7 text-foreground" />
							</a>
						</div>

						<p className="m-4 flex justify-center text-center text-base">{project.description}</p>
						<ul className="flex flex-wrap justify-center">
							{project.skills.map((skill: string, id: number) => (
								<li className="m-1 rounded-xl bg-accent p-1 text-base font-medium" key={id}>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}
