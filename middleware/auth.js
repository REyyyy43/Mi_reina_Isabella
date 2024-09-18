const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

// Middleware para analizar el cuerpo del formulario
app.use(express.urlencoded({ extended: false }));

app.post('/send-email', (req, res) => {
    const { nombre, correo, telefono, asunto, direccion, mensaje } = req.body;

    // Configurar el transporte de nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail', // Usa 'gmail' como servicio
        auth: {
            user: 'mireinaisabella003@gmail.com', // Correo del administrador
            pass: 'ttkjwnbuayvldkzw' // Contraseña de aplicación
        }
    });

    // Contenido del correo
    let mailOptions = {
        from: correo, // El correo del cliente
        to: 'mireinaisabella@gmail.com', // Correo del administrador
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
            console.error('Error al enviar el correo:', error);
            return res.status(500).send('Error al enviar el correo.');
        }
        console.log('Correo enviado: ' + info.response);
        alert.status(200).send('Correo enviado exitosamente.');
    });
});

// Definir el puerto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});