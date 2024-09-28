import { Icon } from "@iconify/react"
import projectsData from "../data/projectsData.json"
import { ProjectCardProps } from "../lib/types"

export default function Projects() {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<strong className="title">Projects</strong>

			<div className="grid max-w-lg grid-cols-1 gap-6">
				{projectsData.map((project: ProjectCardProps) => (
					<div key={project.title} className="card-shadow group relative mx-auto rounded-lg p-2">
						<div className="gap-2 p-4">
							<strong className="font-platypi text-2xl font-semibold">{project.title}</strong>
							<p className="my-2 text-sm">{project.description}</p>

							<div className="flex flex-wrap items-center justify-center gap-1 p-2 text-center md:p-4">
								{project.skills.map((skill, index) => (
									<span key={index} className="rounded-lg bg-accent px-2 py-1 text-xs font-medium">
										{skill}
									</span>
								))}
							</div>

							<div className="flex flex-row items-center justify-center gap-2">
								<a href={project.source} target="_blank" rel="noopener noreferrer">
									<Icon icon="simple-icons:github" className="icon h-6 w-6" />
								</a>
								<a href={project.demo} target="_blank" rel="noopener noreferrer">
									<Icon icon="material-symbols:open-in-new" className="icon h-6 w-6" />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
