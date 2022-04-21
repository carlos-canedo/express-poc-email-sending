const nodemailer = require("nodemailer");
const env = require("../utils/EnvSwitcher");

const transporter = nodemailer.createTransport({
  host: env.get("MAILER_HOST"),
  port: env.get("MAILER_PORT"),
  secure: env.get("MAILER_SECURE") === "true" ? true : false,
  auth: {
    user: env.get("MAILER_USER"),
    pass: env.get("MAILER_PASSWORD"),
  },
});

transporter.verify().catch((error) => {
  console.log(error.message);
});

module.exports = { transporter };
