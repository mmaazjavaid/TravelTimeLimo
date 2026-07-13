'use client';
import React from 'react';
import BookingsMeta from '@/lib/Table/Schema/bookings_schema';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { BookingModel } from '@/types/bookings';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/motion';

export const BookingsTable: React.FC<{ bookings: BookingModel[] }> = ({ bookings }) => {
	const table = useMaterialReactTable({
		columns: BookingsMeta,
		data: bookings || [],
		enableColumnPinning: true,
		initialState: {
			sorting: [{ id: 'bookingInfo.date', desc: true }],
		},
		muiTableContainerProps: { sx: { maxHeight: '700px' } },
		muiTablePaperProps: {
			elevation: 0,
			sx: { border: 'none', boxShadow: 'none' },
		},
		muiTableHeadCellProps: {
			sx: {
				fontFamily: 'var(--font-sans)',
				fontWeight: 600,
				fontSize: '0.75rem',
				letterSpacing: '0.06em',
				textTransform: 'uppercase',
				color: 'var(--ink)',
				backgroundColor: 'var(--surface)',
			},
		},
		muiTableBodyCellProps: {
			sx: {
				fontFamily: 'var(--font-sans)',
				fontSize: '0.875rem',
				fontVariantNumeric: 'tabular-nums',
			},
		},
	});

	const isEmpty = !bookings || bookings.length === 0;

	return (
		<FadeIn>
			<Card className="border-border/60 shadow-lift">
				<CardHeader className="border-b border-border/60 bg-surface">
					<CardTitle className="font-display text-2xl text-foreground">Bookings</CardTitle>
					<p className="text-sm text-muted-foreground">
						{isEmpty ? 'No bookings found' : `${bookings.length} total booking${bookings.length !== 1 ? 's' : ''}`}
					</p>
				</CardHeader>
				<CardContent className="p-0">
					{isEmpty ? (
						<div className="flex flex-col items-center justify-center py-20 text-center">
							<p className="text-muted-foreground">No bookings to display yet.</p>
						</div>
					) : (
						<MaterialReactTable table={table} />
					)}
				</CardContent>
			</Card>
		</FadeIn>
	);
};
