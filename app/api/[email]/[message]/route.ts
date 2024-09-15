import sendMessageEmail from '../../../mailgun/sendMessageEmail';

type MessageParams = {
  email: 'string';
  subject: 'string';
  message: 'string';
};
export async function POST(req: Request, route: { params: MessageParams }) {
  const inquiry = { ...route.params };
  try {
    await sendMessageEmail(inquiry);
    console.log('Email sent successfully');
    return new Response(
      JSON.stringify({
        success: 'success',
        message: 'Request received',
        status: 200,
        statusText: 'Your  message has been received!',
      })
    );
  } catch (error) {
    console.log('ERROR sending MESSAGE EMAIL', error);
    return new Response(
      JSON.stringify({
        success: 'failed',
        message: 'Request received',
        status: 500,
        statusText: 'There was an error, please try again later.',
      })
    );
  }
}
