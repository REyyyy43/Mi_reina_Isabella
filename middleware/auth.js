const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// Middleware para analizar el cuerpo del formulario
app.use(express.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
    const { nombre, correo, telefono, asunto, direccion, mensaje } = req.body;

    // Configurar el transporte de nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tu-correo@gmail.com', // Cambia esto por tu correo
            pass: 'tu-contraseña-o-contraseña-de-aplicación' // Usa una contraseña de aplicación si tienes 2FA activado
        }
    });

    // Contenido del correo
    let mailOptions = {
        from: 'tu-correo@gmail.com',
        to: 'destinatario@mi-reina-isabella.com', // Cambia esto por el correo de Mi Reina Isabella
        subject: `Nuevo mensaje de ${nombre}: ${asunto}`,
        text: `
        Nombre: ${nombre}
        Correo: ${correo}
        Teléfono: ${telefono || 'No proporcionado'}
        Dirección: ${direccion || 'No proporcionada'}
        
        Mensaje:
        ${mensaje}
        `,
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error al enviar el correo.');
        }
        console.log('Correo enviado: ' + info.response);
        res.status(200).send('Correo enviado exitosamente.');
    });
});

// Definir el puerto
const PORT = process.env.PORT || 3001;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});