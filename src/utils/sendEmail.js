import nodemailer from 'nodemailer';

const sendEmail = async (to, subject, html) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 995,
    auth: {
      // user: 'pick.pickpickhy02@gmail.com',
      // pass: 'Pickpassword1!',
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: 'pick.pickpickhy02@gmail.com',
    to: 'aoiiroa@gmail.com',
    subject: 'hello, I am test mail',
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
