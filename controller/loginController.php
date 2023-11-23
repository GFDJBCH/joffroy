<?php

require_once '../config/APP.php';
require_once '../model/usuario.php';

class loginController extends usuarios
{
    public function iniciar_sesion_empleado_controller()
    {
        session_start(); // Iniciar la sesión

        $usuario = $_POST["correo"];
        $pswrd = $_POST["contrasena"];

        // Validar los campos
        if (empty($usuario) || empty($pswrd)) {
            echo json_encode(array("status" => "error", "message" => "No ha llenado los campos requeridos"));
            exit();
        }

        $partes = explode("@", $usuario);
        $dominio = end($partes);

        if ($dominio === "joffroy.com") {

            $urlServer = 'https://pro.joffroy.com/Token';
            $data = array(
                'grant_type' => 'password',
                'username' => $usuario,
                'password' => $pswrd
            );

            $options = array(
                CURLOPT_URL => $urlServer,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_HEADER => false,
                CURLOPT_POST => true,
                CURLOPT_POSTFIELDS => http_build_query($data),
                CURLOPT_HTTPHEADER => array('Content-Type: application/x-www-form-urlencoded'),
                CURLOPT_SSL_VERIFYPEER => false, // Importante para evitar problemas de certificados SSL en entornos de desarrollo
            );

            $curl = curl_init();
            curl_setopt_array($curl, $options);
            $response = curl_exec($curl);

            if ($response === false) {
                echo 'Error en la solicitud: ' . curl_error($curl);
            } else {
                $responseData = json_decode($response, true);

                if (isset($responseData['access_token'])) {
                    $partner_type = "ADMIN";
                    $_SESSION["session_id"] = $responseData['userName'];
                    $_SESSION["session_name"] = $responseData['userName'];
                    $_SESSION["session_email"] = $responseData['userName'];
                    $_SESSION["session_partner"] = null;
                    $_SESSION["session_partner_type"] = $partner_type;
                    $_SESSION["session_token"] = $responseData['access_token'];
                    $url = SERVERURL . "proveedores.html";
                    echo json_encode(array("status" => "success", "message" => "Bienvenido " . $_SESSION["session_name"], "redirect_url" => $url));

//                    echo json_encode($responseData);
                } else {
                    // Manejo de errores si no se obtiene el token
                    echo json_encode(array("status" => "error", "message" => $responseData['error_description']));
                }

                curl_close($curl);
            }

//            $iniciar_sesion = $this->select_remote_users($usuario, $pswrd);

        } else {
            $iniciar_sesion = $this->selectView_socio($usuario, $pswrd);
            $partner_type = "PARTNER";
            $url = SERVERURL . "socios-dash.html";
            if ($iniciar_sesion->num_rows > 0) {
                $row = $iniciar_sesion->fetch_assoc();
                $_SESSION["session_id"] = ($partner_type === "PARTNER" ? $row["id"] : $row["Id"]);
                $_SESSION["session_name"] = ($partner_type === "PARTNER" ? ($row["nombre"] . " " . $row["apellidos"]) : $row["Nombre"]);
                $_SESSION["session_email"] = ($partner_type === "PARTNER" ? $row["email"] : $row["UserName"]);
                $_SESSION["session_partner"] = ($partner_type === "PARTNER" ? $row["socio"] : null);
                $_SESSION["session_partner_type"] = $partner_type;
                $_SESSION["session_token"] = md5(uniqid(mt_rand(), true));
                echo json_encode(array("status" => "success", "message" => "Bienvenido " . $_SESSION["session_name"], "redirect_url" => $url));
            } else {
                echo json_encode(array("status" => "error", "message" => "Credenciales inválidas"));
            }
        }
    }
}

// Comprobamos si se ha enviado la acción y la ejecutamos si corresponde
if (isset($_POST["action"])) {

    $loginController = new loginController();
    $action = $_POST["action"];

    switch ($action) {
        case "iniciar_sesion_empleado_controller":
            $loginController->iniciar_sesion_empleado_controller();
            break;
        // Otras acciones aquí...
    }
}