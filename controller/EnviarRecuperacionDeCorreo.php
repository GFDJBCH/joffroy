<?php
// // Importar la clase PHPMailer
// require '../phpmailer/PHPMailer.php';
// require '../phpmailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

//Load Composer's autoloader
require '../vendor/autoload.php';

require '../model/contactos.php';


// Crear una nueva instancia de PHPMailer
$mail = new PHPMailer();

$contactos = new contactos();

// Configurar el servidor SMTP
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

$contrasena = $contactos->recuperar_contrasena($correo);


// Configurar el remitente y destinatario
$mail->setFrom('noreply@joffroy.com', 'Joffroy Group');
$mail->addAddress($correo, 'Destinatario');

// Configurar el asunto y cuerpo del correo
$mail->Subject = 'Password recovery';
// $mail->Body = 'Contenido del correo';

$dirrecion = 'http://partners.joffroy.com/sing-in.html';

// $mail->Body = file_get_contents('../correo.html'); // Reemplaza "ruta/al/archivo.html" con la ruta real a tu archivo HTML
$mail->Body = '
<style>
    table, td, div, h1, p {font-family: Arial, sans-serif;}
</style>
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
                                    <td style="padding:0 0 14px 0;color:#001D41;">
                                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align: left;">Dear Nombre de usuario</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#001D41;">
                                        <p style="font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align: left;">
                                            We have received your request to reset the password for your account, and we are pleased to assist you with that.
                                            <br>
                                            Below, you will find the new password to access your account:
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:0px;color:#001D41;">
                                        <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align: left;">Password: '.$contrasena.'</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#001D41;">
                                        <p style="font-size:16px;line-height:24px;font-family:Arial,sans-serif;text-align: left;">
                                            Please note that for security reasons, we recommend changing your password after logging in.
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="padding:30px 0;">
                                        <table role="presentation" style="border-collapse:collapse;border:0;border-spacing:0;">
                                            <tr>
                                                <td align="center" style="border-radius:5px;background:#0A0B36;">
                                                    <a href="'.$dirrecion.'" style="background:#0A0B36;color:#ffffff;display:inline-block;font-family:Arial,sans-serif;font-size:16px;line-height:44px;text-align:center;text-decoration:none;width:300px;-webkit-text-size-adjust:none;mso-hide:all;">Reset Password</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px;background:#ffffff;">
                            <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                                <tr>
                                    <td style="color:#153643;padding:0 0 20px 0;font-size:12px;line-height:18px;font-family:Arial,sans-serif;">
                                        <p style="margin:0;">If you did not request a password reset, please ignore this email or contact our support team.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#153643;padding:0 0 4px 0;font-size:12px;line-height:18px;font-family:Arial,sans-serif;">
                                        <p style="margin:0;">Best regards,</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="color:#153643;padding:0;font-size:12px;line-height:18px;font-family:Arial,sans-serif;">
                                        <p style="margin:0;">Joffroy Group</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
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
