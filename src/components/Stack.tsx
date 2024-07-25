import { Icon } from "@iconify/react"
import stackData from "../data/stackData.json"

export interface StackItem {
	name: string
	description: string
	iconSrc: string
	link: string
}

export default function Stack() {
	return (
		<section className="container mx-auto flex flex-col items-center py-10 sm:px-6 lg:px-36" id="stack">
			<div className="flex flex-col items-center text-center">
				<strong className="title">Tech Stack</strong>
				<p className="subtitle">Technologies that I'm familiar with.</p>
			</div>

			<div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
				{stackData.map((item: StackItem) => (
					<article
						className="card-shadow flex flex-col items-center rounded-2xl p-2 text-center lg:p-3"
						key={item.name}
					>
						<a href={item.link}>
							<Icon icon={item.iconSrc} className="icon p-1 text-4xl text-foreground" aria-label={item.name} />
						</a>
						<strong className="p-1 font-platypi font-semibold">{item.name}</strong>
						<p className="text-xs">{item.description}</p>
					</article>
				))}
			</div>
		</section>
	)
}
