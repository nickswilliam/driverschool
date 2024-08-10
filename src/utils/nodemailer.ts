import nodemailer from "nodemailer";


//instanciado de transporter nodemailer
export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.motivandoconductoras@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
    from: "info.motivandoconductoras@gmail.com",
  });