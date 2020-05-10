const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const creds = require("./config");

const nodemailer = require("nodemailer");





const app = express();

// app.use(
//   "/public",
//   express.static(path.join(__dirname, "public"))
// );

app.use(
  bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Send Your Email to /send");
});

app.post("/send", (req, res) => {
  const output = `
    <h1>Conatct Request</h1>
    <p>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
            <li>Message: ${req.body.message}</li>
            <li>Message: ${req.body.favourite}</li>

        <ul>
    <p>
    `;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  });

  let mailOptions = {
    from: '"Shubinder" <shubv1992@gmail.com>',
    to: "shubinder92@gmail.com",
    subject: "Conatct Request",
    text: "Hello",
    html: output
  };

  transporter.sendMail(
    mailOptions,
    (error, info) => {
      if (error) {
        return console.log(error);
      }

      console.log(
        "Message sent: %s",
        info.messageId
      );
      const date = new Date();

      console.log(
        "Time:",
        `${date.getHours()}:${date.getMinutes()}`
      );
      console.log(
        "Preview URL: %s",
        nodemailer.getTestMessageUrl(info)
      );
      res.render("contact", {
        msg: "Email has been sent"
      });
    }
  );
});


// Stripe Payment API 

app.post('/payment', (req, res) => { 
  const body = {
    source:req.body.token.id,
    amount: req.body.amount,
    currency: 'gbp'
  }

}

app.listen(5000, () =>
  console.log(`Listening on port: 5000`)
);
