export interface ProjectCardProps {
	title: string
	imageSrc: string
	description: string
	skills: string[]
	demo: string
	source: string
}

export interface StackCardProps {
	name: string
	description: string
	iconSrc: string
	link: string
}

export interface aboutDataProps {
	content: string
	divider: boolean
}
