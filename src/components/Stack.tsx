import { Icon } from "@iconify/react"
import stackData from "../data/stackData.json"
import { StackCardProps } from "../lib/types"

export default function Stack() {
	return (
		<div className="flex flex-col items-center justify-center text-center">
			<strong className="title">Tech Stack</strong>

			<div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
				{stackData.map((item: StackCardProps) => (
					<div key={item.name} className="card-shadow flex flex-col items-center rounded-lg p-2 text-center">
						<a href={item.link}>
							<Icon icon={item.iconSrc} className="icon p-1 text-4xl text-foreground" />
						</a>
						<strong className="p-1 font-platypi font-semibold">{item.name}</strong>
						<p className="text-xs">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
