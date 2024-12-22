interface subHeadings {
	title: string;
	content: string;
	id: string;
	nestedSubHeadings?: subHeadings[];
}
export interface TermsSection {
	id: number;
	title: string;
	content: string;
	href: string;
	subHeadings?: subHeadings[];
}
