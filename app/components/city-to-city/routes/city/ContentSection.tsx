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
		<section className={cn('py-16', className)}>
			<div className="mx-auto max-w-6xl px-4">
				<div
					className={cn(
						'grid gap-12 items-center',
						'lg:grid-cols-2',
						imagePosition === 'right' ? 'lg:grid-flow-dense' : ''
					)}
				>
					<div className={cn('relative aspect-[4/3] w-full', imagePosition === 'right' ? 'lg:col-start-2' : '')}>
						<Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
					</div>
					<div className="space-y-6">
						<h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
						<div className="space-y-4 text-gray-600 leading-relaxed">{content}</div>
					</div>
				</div>
			</div>
		</section>
	);
}
