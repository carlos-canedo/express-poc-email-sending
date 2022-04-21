# Express POC Email Sending

This is an email sending proof of concept (POC) developed with Express Js, emails are created statically and its content includes _plain text_, _html_, a _custom html template_ and _attachments_. There were also defined two environments that controll where emails will be sent.

- Development: this envrionment will send emails to ethereal smtp server. To run it you have to get an [Ethereal](https://ethereal.email) account.

- Prouction: this envrionment will send emails to gmail smtp server. To run it you have to enable 2 steps verification in your google account and create an app password.

Eather in development or production envrionment, you have to add its credentials (user and password) in the .env file.

## Tech stack

- [Express](https://expressjs.com/)

- [Nodemailer](https://www.npmjs.com/package/nodemailer)

- [Handlebars](https://www.npmjs.com/package/handlebars)

- [Dotenv](https://www.npmjs.com/package/dotenv)

- [Cross-env](https://www.npmjs.com/package/cross-env)

## Run locally

- Clone repository

  ```sh
  https://github.com/carlos-canedo/express-poc-email-sending.git
  ```

- Install packages

  ```sh
  npm install
  ```

- Create .env file

  ```
    # production

    PORT=3000

    MAILER_HOST=smtp.gmail.com
    MAILER_PORT=465
    MAILER_SECURE=true
    MAILER_USER=<google_account@gmail.com>
    MAILER_PASSWORD=<google_account_app_password>

    MAILER_RECEIVER=<receiver_account@gmail.com>

    # development

    DEV_PORT=3000

    DEV_MAILER_HOST=smtp.ethereal.email
    DEV_MAILER_PORT=587
    DEV_MAILER_SECURE=false
    DEV_MAILER_USER=<ethereal_account@ethereal.email>
    DEV_MAILER_PASSWORD=<ethereal_account_password>

    DEV_MAILER_RECEIVER=<receiver_account@gmail.com>
  ```

- Run server

  Production environment

  ```sh
  npm start
  ```

  Development environment

  ```sh
  npm run start:dev
  ```
