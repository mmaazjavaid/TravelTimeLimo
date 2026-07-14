'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export type DropDownOption = {
	value: string;
	label: string;
	disabled?: boolean;
};

interface DropDownProps {
	options: DropDownOption[];
	placeholder?: string;
	emptyMessage?: string;
	onChange: (value: string) => void;
	value?: string;
	disabled?: boolean;
	className?: string;
	/** Set false for short, fixed option lists (e.g. a title picker) where a
	 * search field only adds height without helping the user find anything. */
	searchable?: boolean;
}

export function DropDown({
	options,
	placeholder = 'Select an option',
	emptyMessage = 'No results found.',
	onChange,
	value,
	disabled = false,
	className,
	searchable = true,
}: DropDownProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className={cn('h-11 w-full justify-between font-normal', className)}
					disabled={disabled}
				>
					{value ? options.find(option => option.value === value)?.label : placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[var(--radix-popover-trigger-width)] min-w-[200px] p-0 shadow-lift">
				<Command>
					{searchable && <CommandInput placeholder={placeholder} />}
					<CommandEmpty>{emptyMessage}</CommandEmpty>
					<CommandGroup>
						{options.map(option => (
							<CommandItem
								key={option.value}
								disabled={!!option.disabled}
								className={cn({
									// Apply disabled styles when the item should be disabled
									'pointer-events-none opacity-50': !!option.disabled,
								})}
								onSelect={() => {
									// Ensure the item is not disabled before selecting
									if (!option.disabled) {
										onChange(option.value);
										setOpen(false);
									}
								}}
							>
								<Check className={cn('mr-2 h-4 w-4', value === option.value ? 'opacity-100' : 'opacity-0')} />
								{option.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
