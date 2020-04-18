const bodyParser = require("bodyparser");
const express = require("express");
const nodemailer = require("Nodemailer");

const app = express();

const port = process.env || 8000;
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "shubv1992@gmail.com",
    pass: 
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("send", (req, res) => {
  const output = `
    <h1>Conatct Request</h1>
    <p>
        <ul>
            <li>Name: ${res.body.name}</li>
            <li>Email: ${res.body.email}</li>
            <li>Phone: ${res.body.phone}</li>
            <li>Message: ${res.body.message}</li>
        <ul>
    <p>
    `;

  let info = transporter.sendMail({
    from: '"Shubinder" <shubv1992@gmail.com>',
    to: "shubinder92@gmail.com",
    subject: "Conatct Request",
    text: "Hello",
    html: output
  });
});

console.log("Message sent: %s", info.messageId);

console.log(
  "Preview URL: %s",
  nodemailer.getTestMessageUrl(info)
);

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
);
