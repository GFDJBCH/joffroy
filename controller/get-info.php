<?php
session_start();
if (isset($_SESSION["session_id"])) {
    $data = [
       "id" => $_SESSION["session_id"],
       "name" => $_SESSION["session_name"],
       "email" => $_SESSION["session_email"],
       "partner" => $_SESSION["session_partner"],
       "partner_type" => $_SESSION["session_partner_type"]
    ];
} else {
    $data = [
        "id" => null,
        "name" => null,
        "email" => null,
        "partner" => null,
        "partner_type" => null
    ];
}
echo json_encode($data);
