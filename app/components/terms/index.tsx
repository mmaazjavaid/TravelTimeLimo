import { TERMS } from '@/lib/constants';
import Link from 'next/link';

export function TermsAndConditions() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
			<h1 className="mb-8 text-3xl font-bold">Travel Time Limo Terms and Conditions</h1>

			{/* Table of Contents */}
			<nav className="mb-12 border-b pb-8">
				<ul className="space-y-3">
					{TERMS.map(section => (
						<li key={section.id} className="relative">
							<Link
								href={`#${section.href}`}
								className="relative text-md hover:text-gray-600 transition-colors duration-300 group"
							>
								<span className="mr-2">{section.id}.</span>
								<span className="relative inline-block">
									{section.title}
									{/* Underline Effect */}
									<span className="absolute left-0 bottom-0 w-full h-0.5 bg-gray-600 transition-all duration-700 group-hover:w-0"></span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			{/* Content Sections */}
			<div className="space-y-16">
				{TERMS.map(section => (
					<section key={section.id} id={section.href} className="scroll-mt-16">
						<h2 className="mb-6 text-2xl font-bold uppercase">
							{section.id}. {section.title}
						</h2>
						<div className="space-y-4 text-gray-600 leading-relaxed">
							{section.content.split('\n\n').map((paragraph, sectionIndex) => (
								<p key={sectionIndex} className="text-base">
									{paragraph}
								</p>
							))}
						</div>

						{/* Subheadings */}
						{section.subHeadings && (
							<div className="mt-8 space-y-6">
								{section.subHeadings.map((subHeading, subHeadingIndex) => (
									<div key={subHeadingIndex}>
										<h3 className="mb-2 text-lg font-semibold">
											{subHeading.id}. {subHeading.title}
										</h3>
										<div className="space-y-4 text-gray-600 leading-relaxed">
											{subHeading.content.split('\n\n').map((paragraph, paragraphIndex) => (
												<p key={paragraphIndex} className="text-base">
													{paragraph}
												</p>
											))}
										</div>

										{/* Nested Subheadings */}
										{subHeading.nestedSubHeadings && (
											<div className="mt-6 space-y-4">
												{subHeading.nestedSubHeadings.map((nestedSubHeading, nestedIndex) => (
													<div key={nestedIndex}>
														<h3 className="mb-2 text-lg font-semibold">
															{nestedSubHeading.id}. {nestedSubHeading.title}
														</h3>
														<div className="space-y-4 text-gray-600 leading-relaxed">
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
