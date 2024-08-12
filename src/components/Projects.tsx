import { Icon } from "@iconify/react"
import projectsData from "../data/projectsData.json"
import { ProjectCardProps } from "../lib/types"

export default function Projects() {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<strong className="title">Projects</strong>

			<div>
				{projectsData.map((project: ProjectCardProps) => (
					<div key={project.title} className="relative mx-auto max-w-sm rounded-lg p-4">
						<div className="card-shadow relative rounded-lg">
							<img src={project.imageSrc} alt={project.title} className="h-48 w-full rounded-lg" />

							<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100">
								<a href={project.source} target="_blank" rel="noopener noreferrer">
									<Icon icon="simple-icons:github" className="icon h-8 w-8" />
								</a>
								<a href={project.demo} target="_blank" rel="noopener noreferrer">
									<Icon icon="material-symbols:open-in-new" className="icon h-8 w-8" />
								</a>
							</div>
						</div>
						<strong className="m-2 font-platypi text-2xl font-semibold">{project.title}</strong>
						<p className="m-2 px-4 text-sm">{project.description}</p>
						<div className="m-2 flex flex-wrap items-center justify-center gap-1">
							{project.skills.map((skill, index) => (
								<span key={index} className="rounded-lg bg-accent p-1 text-xs font-medium">
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
