import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ContentSectionProps } from '@/types/city-to-city';

export function ContentSection({
	title,
	content,
	imageSrc,
	imageAlt,
	imagePosition = 'left',
	className,
}: ContentSectionProps) {
	return (
		<section className={cn('section-padding', className)}>
			<div className="section-container">
				<div
					className={cn(
						'grid items-center gap-10',
						'lg:grid-cols-2',
						imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
					)}
				>
					<div
						className={cn(
							'relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lift',
							imagePosition === 'right' ? 'lg:col-start-2' : ''
						)}
					>
						<Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
					</div>
					<div className="space-y-5">
						<h2 className="text-title text-foreground">{title}</h2>
						<div className="space-y-4 leading-relaxed text-muted-foreground">{content}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
