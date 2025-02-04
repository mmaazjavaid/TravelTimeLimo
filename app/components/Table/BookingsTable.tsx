'use client';
import React from 'react';
import BookingsMeta from '@/lib/Table/Schema/bookings_schema';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { BookingModel } from '@/types/bookings';
import { Card, CardTitle } from '@/components/ui/card';

export const BookingsTable: React.FC<{ bookings: BookingModel[] }> = ({ bookings }) => {
	const table = useMaterialReactTable({
		columns: BookingsMeta,
		data: bookings || [],
		enableColumnPinning: true,
		initialState: {
			sorting: [
				{
					id: 'bookingInfo.date',
					desc: true,
				},
			],
		},
		muiTableContainerProps: { sx: { maxHeight: '800px' } },
	});

	return (
		<Card className="m-10 mt-16 p-8 shadow-lg rounded-lg bg-white border border-gray-200">
			<CardTitle className="text-3xl font-bold mb-6 text-gray-800 text-center"> Bookings</CardTitle>
			<MaterialReactTable table={table} />
		</Card>
	);
};
