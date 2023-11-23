<?php
// // Importar la clase PHPMailer
// require '../phpmailer/PHPMailer.php';
// require '../phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

//Load Composer's autoloader
require '../vendor/autoload.php';

// Crear una nueva instancia de PHPMailer
$mail = new PHPMailer();

// Configurar el servidor SMTP
// $mail->isSMTP();
// $mail->Host = 'mpbutron.com';
// $mail->SMTPAuth = true;
// $mail->Username = 'PruebaDeCorreo@mpbutron.com';
// $mail->Password = 'mp_Butr0n';
// $mail->SMTPSecure = 'tls';
// $mail->Port = 587;
$mail->isSMTP();
// $mail->Host = 'mpbutron.com';
$mail->Host = 'email-smtp.us-west-2.amazonaws.com';
$mail->SMTPAuth = true;
// $mail->Username = 'PruebaDeCorreo@mpbutron.com';
$mail->Username = 'AKIAUPIQQZEMI5ZAFGZB';
$mail->Password = 'BGQm9+vFhqp1Iv+/rJvvKESGhaUHiNGeCG1K4Hh4hKS5';
$mail->SMTPSecure = '587';
$mail->Port = 587;

$correo = $_GET["correo"];

// Configurar el remitente y destinatario
$mail->setFrom('noreply@joffroy.com', 'Joffroy Group');
$mail->addAddress($correo, 'Destinatario');

// Configurar el asunto y cuerpo del correo
$mail->Subject = 'Account confirmation';
// $mail->Body = 'Contenido del correo';
$dirrecion = 'http://partners.joffroy.com/socios-bienvenida.html?email='.$correo;

// $mail->Body = file_get_contents('../correo.html'); // Reemplaza "ruta/al/archivo.html" con la ruta real a tu archivo HTML
$mail->Body = '

<!-- <!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <meta name="x-apple-disable-message-reformatting">
        <title></title>
        <style>
            table, td, div, h1, p {font-family: Arial, sans-serif;}
        </style>
    </head> -->
    <body style="margin:0;background:#7B90B6;">
        <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#7B90B6;">
            <tr>
                <td align="center" style="padding:0;padding:30px 0px;">
                    <table role="presentation" style="width:602px;border-collapse:collapse;border:0;border-spacing:0;text-align:left;">
                        <tr>
                            <td align="center" style="padding:40px 0 30px 0;background:#0A0B36;">
                                <img src="http://partners.joffroy.com/assets/media/logos/logo-01.png" alt="" width="300" style="height:auto;display:block;" />
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:36px 30px 42px 30px; background:#ffffff;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                    <tr>
                                        <td style="padding:0 0 36px 0;color:#001D41;">
                                            <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif; text-align: center;">Welcome to Joffroy!</h1>
                                            <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align: center;">To activate your account, click the button below to verify your email address.</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 0 36px 0;">
                                            <p style="margin:0 12px 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align:center;"><a href="'.$dirrecion.'" style="background:#1a2bc2; color:white;text-decoration:none;padding: 15px 20px;border-radius: 0.25rem;">Activate account</a></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0;">
                                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                                <tr>
                                                    <td style="width:260px;padding:0;vertical-align:top;color:#001D41;">
                                                        <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="http://partners.joffroy.com/assets/media/logos/g10041.png" alt="" width="260" style="height:auto;display:block;" /></p>
                                                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">You will be able to see your information from any possible digital medium.</p>
                                                    </td>
                                                    <td style="width:20px;padding:0;font-size:0;line-height:0;">&nbsp;</td>
                                                    <td style="width:260px;padding:0;vertical-align:top;color:#001D41;">
                                                        <p style="margin:0 0 25px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><img src="http://partners.joffroy.com/assets/media/logos/g10022.png" alt="" width="260" style="height:auto;display:block;" /></p>
                                                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">You will be able to see the notifications of any topic by this means.</p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding:30px;background:#0A0B36;">
                                <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                                    <tr>
                                        <td style="padding:0;width:50%;" align="left">
                                            <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                                                &reg; Joffroy, <span id="spnDay"></span> <span id="spMonth"></span> <span id="spnYear"></span>

                                            </p>
                                        </td>
                                        <td style="padding:0;width:50%;" align="right">

                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <script>
            const fecha = new Date();
            var mm;

            switch(fecha.getMonth()){
                case 0:
                    mm = "Enero";
                    break;
                case 1:
                    mm = "Febrero";
                    break;
                case 2:
                    mm = "Marzo";
                    break;
                case 3:
                    mm = "Abril";
                    break;
                case 4:
                    mm = "Mayo";
                    break;
                case 5:
                    mm = "Junio";
                    break;
                case 6:
                    mm = "Julio";
                    break;
                case 7:
                    mm = "Agosto";
                    break;
                case 8:
                    mm = "Septiembre";
                    break;
                case 9:
                    mm = "Octubre";
                    break;
                case 10:
                    mm = "Noviembre";
                    break;
                case 11:
                    mm = "Diciembre";
                    break;
            }

            document.getElementById("spnDay").innerHTML = fecha.getDate();
            document.getElementById("spMonth").innerHTML = mm;
            document.getElementById("spnYear").innerHTML = fecha.getFullYear();
        </script>

    </body>
<!-- </html> -->

'; // Reemplaza "ruta/al/archivo.html" con la ruta real a tu archivo HTML

// Establecer el correo como HTML
$mail->isHTML(true);

// Envío del correo
if ($mail->send()) {
    echo "El correo se ha enviado correctamente.";
} else {
    echo "Error al enviar el correo: " . $mail->ErrorInfo;
}


?>
