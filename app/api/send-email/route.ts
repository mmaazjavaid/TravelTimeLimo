import mailgun from 'mailgun-js';

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
});

export async function POST(req) {

    try {
        const { stepperForm } = req.body;

        const emailData = {
            from: process.env.MAILGUN_FROM_EMAIL,
            to: 'muhammad.maaz@mergestack.com', // Replace with the recipient's email
            subject: 'New Ride Booked',
            text: `Stepper`,
        };

        const result = await new Promise((resolve, reject) => {
            mg.messages().send(emailData, (error, body) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });

        return new Response(JSON.stringify({ success: true, result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
}
