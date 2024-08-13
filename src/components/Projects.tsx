import { Icon } from "@iconify/react"
import projectsData from "../data/projectsData.json"
import { ProjectCardProps } from "../lib/types"

export default function Projects() {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<strong className="title">Projects</strong>

			<div className="space-x-8 space-y-8 p-4">
				{projectsData.map((project: ProjectCardProps) => (
					<div key={project.title} className="group relative mx-auto max-w-sm rounded-lg">
						<div className="card-shadow relative overflow-hidden rounded-lg">
							<img src={project.imageSrc} alt={project.title} className="h-48 w-full" />

							<div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
								<a href={project.source} target="_blank" rel="noopener noreferrer">
									<Icon icon="simple-icons:github" className="icon h-8 w-8" />
								</a>
								<a href={project.demo} target="_blank" rel="noopener noreferrer">
									<Icon icon="material-symbols:open-in-new" className="icon h-8 w-8" />
								</a>
							</div>
						</div>

						<div className="p-4">
							<strong className="font-platypi text-2xl font-semibold">{project.title}</strong>
							<p className="mb-4 mt-2 text-sm">{project.description}</p>

							<div className="flex flex-wrap items-center justify-center gap-1">
								{project.skills.map((skill, index) => (
									<span key={index} className="rounded-lg bg-accent p-1 text-xs font-medium">
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
