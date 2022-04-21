const fs = require("fs");
const path = require("path");

const handlebars = require("handlebars");
const env = require("./config/envswitcher");
const { transporter } = require("./config/mailer");

async function send() {
  const file = await new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "./misc/email-template.html"),
      { encoding: "utf-8" },
      (err, file) => {
        err ? reject(err) : resolve(file);
      }
    );
  });

  const template = handlebars.compile(file);
  const replacements = {
    title: `${env.get("MAILER_RECEIVER")}`,
    paragraph: `Email writed by ${env.get("MAILER_USER")}`,
  };

  const content = {
    from: env.get("MAILER_USER"),
    to: env.get("MAILER_RECEIVER"),
    subject: "subject",
    text: "plain text",
    html: template(replacements),
    attachments: [
      {
        filename: "text-document.txt",
        path: path.join(__dirname, "./misc/text-document.txt"),
      },
      {
        filename: "image-document.png",
        path: path.join(__dirname, "./misc/image-document.png"),
      },
    ],
  };

  return await transporter.sendMail(content);
}

module.exports = { send };
