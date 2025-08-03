import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: '',
  port: '',
  secure: false,
  auth: {
    user: '',
    pass: '',
  },
});

export const sendEmail = async (options) => {
  return await transport.sendMail(options);
};
