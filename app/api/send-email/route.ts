import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { sendEmail } from '@/lib/helpers/sendEmail';

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export async function POST(req: Request) {
	try {
		const body = await req.json(); // Parse the JSON request body

		const emailData = {
			bookingData: body,
		};

		await sendEmail(emailData);
		return NextResponse.json({ success: true }, { status: 200 });
	} catch (error: any) {
		return NextResponse.json({ success: false, error: error.message }, { status: 500 });
	}
}
