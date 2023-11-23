<?php
    $para = 'anorak.ja@gmail.com';
    $asunto = 'Correo de prueba';
    $mensaje = 'Este es un correo de prueba enviado';

    // Configuración de SMTP para Gmail con conexión segura TLS
    ini_set('SMTP', 'smtp.gmail.com');
    ini_set('smtp_port', 587);
    ini_set('smtp_ssl', 'tls');

    // Opcional: Puedes establecer el remitente del correo
    $cabeceras = 'From: anorak.ja@gmail.com' . "\r\n";

    // Envía el correo
    $mail_enviado = mail($para, $asunto, $mensaje, $cabeceras);

    if ($mail_enviado) {
        echo 'El correo se ha enviado correctamente.';
    } else {
        echo 'Hubo un error al enviar el correo.';
    }
?>
