const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: true,
  logger: true
});

const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"Power House Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    })
    console.log(`Email sent to ${to}`);
  }
  catch (err) {
    console.error('Failed to send email');
    throw err;
  }
};

module.exports = sendEmail;