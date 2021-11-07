export type Variant = "neutral" | "primary" | "success" | "danger" | "warning" | "info" | "link";

export interface Blogpost {
	title: string;
	date: Date;
	slug: string;
	series: string;
	lang: "ru" | "en";
}

/**
 * Defines a used `repo` object subset from `Github Rest API`
 */
export interface GithubRepo {
	name: string;
	description: string;
	homepage: string;
	html_url: string;
	language: string;
	topics: string[];
}

/**
 * Defines a Project data used to render the view.
 */
export interface Project extends Omit<GithubRepo, "html_url"> {
	type: "app" | "package" | "website";
	github: string;
	packageName?: string;
}