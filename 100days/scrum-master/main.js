const nodemailer = require('nodemailer');
var employees = ["dggomez21@gmail.com", "Daniel.gomez@ryerson.ca"];
//send out emails
let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f9406741d5e414",
      pass: "4ca601afb35b4b"
    }
  });

for( var i =0; i< employees.length; i++){
    var message = {
        from: 'scrum@master.com', // Sender address
        to: employees[i],         // List of recipients
        subject: 'Sptrint Meeting', // Subject line
        html: `<h1>Sprint Meeting</h1><p>Please send your in your sprints by 10 a.m </p>
        <br/>
        <br/>
        <p>Please use the following format</p>

        <p>Today: Add your daily tasks here</p>
        <p>Errors: All set backs will be recorded here</p>
        <p>(optional) Setup meeting: add emails and time ([emails, emails], time, reason)</P>
        `    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
}

// recieve emails

// scan emails

// store info

// find errors in history

// follow up emails

// update board

// optional set up meetings/reminders