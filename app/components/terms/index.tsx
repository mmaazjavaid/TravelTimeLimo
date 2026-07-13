import { TERMS } from '@/lib/constants';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/motion';

export function TermsAndConditions() {
	return (
		<div className="section-container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
			<FadeIn>
				<h1 className="text-title mb-2 text-foreground">Travel Time Limo Terms and Conditions</h1>
				<p className="mb-10 text-muted-foreground">Last updated legal terms governing your use of our services.</p>
			</FadeIn>

			<nav className="mb-12 rounded-xl border border-border/60 bg-surface p-6" aria-label="Table of contents">
				<h2 className="text-label mb-4 text-gold-dark">Contents</h2>
				<ul className="space-y-2">
					{TERMS.map(section => (
						<li key={section.id}>
							<Link
								href={`#${section.href}`}
								className="group flex items-baseline gap-2 text-sm text-foreground transition-colors hover:text-gold-dark"
							>
								<span className="text-muted-foreground">{section.id}.</span>
								<span className="underline-offset-4 group-hover:underline">{section.title}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className="space-y-16">
				{TERMS.map(section => (
					<section key={section.id} id={section.href} className="scroll-mt-24">
						<h2 className="mb-6 font-display text-2xl font-semibold text-foreground">
							{section.id}. {section.title}
						</h2>
						<div className="space-y-4 leading-relaxed text-muted-foreground">
							{section.content.split('\n\n').map((paragraph, sectionIndex) => (
								<p key={sectionIndex} className="text-base">
									{paragraph}
								</p>
							))}
						</div>

						{section.subHeadings && (
							<div className="mt-8 space-y-8">
								{section.subHeadings.map((subHeading, subHeadingIndex) => (
									<div key={subHeadingIndex}>
										<h3 className="mb-3 text-lg font-semibold text-foreground">
											{subHeading.id}. {subHeading.title}
										</h3>
										<div className="space-y-4 leading-relaxed text-muted-foreground">
											{subHeading.content.split('\n\n').map((paragraph, paragraphIndex) => (
												<p key={paragraphIndex} className="text-base">
													{paragraph}
												</p>
											))}
										</div>

										{subHeading.nestedSubHeadings && (
											<div className="mt-6 space-y-6 border-l-2 border-gold/20 pl-6">
												{subHeading.nestedSubHeadings.map((nestedSubHeading, nestedIndex) => (
													<div key={nestedIndex}>
														<h4 className="mb-2 text-base font-semibold text-foreground">
															{nestedSubHeading.id}. {nestedSubHeading.title}
														</h4>
														<div className="space-y-4 leading-relaxed text-muted-foreground">
															{nestedSubHeading.content.split('\n\n').map((nestedParagraph, nestedParagraphIndex) => (
																<p key={nestedParagraphIndex} className="text-base">
																	{nestedParagraph}
																</p>
															))}
														</div>
													</div>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						)}
					</section>
				))}
			</div>
		</div>
	);
}
