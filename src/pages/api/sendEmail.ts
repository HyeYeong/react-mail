import type { NextApiRequest, NextApiResponse } from 'next';
import {EmailTemplate} from '@/components/EmailTemplate';
import sendEmail from '@/utils/sendEmail';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const toEmail = req.body.toEmail;
    const subject = 'Welcome to Our Website';

    try {
      const welcomeEmailHtml = EmailTemplate;
      await sendEmail(toEmail, subject, welcomeEmailHtml);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}