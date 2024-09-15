import formData from 'form-data';
import Mailgun from 'mailgun.js';

const MAILGUN_API_KEY = process.env.MAILGUN_SECRET_KEY || '';

const mailgun = new Mailgun(formData);
export const mailgunClient = mailgun.client({
  username: 'api',
  key: MAILGUN_API_KEY,
});
