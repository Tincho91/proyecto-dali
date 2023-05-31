import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { nombre, apellido, telefono, empresa, email, mensaje } = req.body;

  const contentHTML = `
    <h1>User Information</h1>
    <ul>
      <li>Nombre: ${nombre}</li>
      <li>Apellido: ${apellido}</li>
      <li>Teléfono: ${telefono}</li>
      <li>Empresa: ${empresa}</li>
      <li>Email: ${email}</li>
    </ul>
    <p>${mensaje}</p>
  `;

  const transporter = nodemailer.createTransport({
    host: 'your_host',
    port: your_port,
    secure: true_or_false, // true for 465, false for other ports
    auth: {
      user: 'your_email',
      pass: 'your_password'
    }
  });

  const mailOptions = {
    from: '"Contact Form" <[email protected]>',
    to: 'your_email',
    subject: 'Contact Form New Message',
    html: contentHTML
  };

  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json(req.body);
    }
  });
};