  var nodemailer = require('nodemailer');
  const creds = require('/config/config');

  var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: creds.USER,
      pass: creds.PASS
    }
  }

  var transporter = nodemailer.createTransport(transport)

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take messages');
    }
  });

  router.post('/send', (req, res, next) => {
    var nome = req.body.nome
    var email = req.body.email
    var mensagem = req.body.mensagem
    var content = 'nome: ${name} \n email: ${email} \n mensagem: ${content} '

    var mail = {
      from: name,
      to: 'mafforte@gmail.com',  //Change to email address that you want to receive messages on
      subject: 'New Message from Contact Form',
      text: content
    }

    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
  })