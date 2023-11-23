<?php
    $mysqli = new mysqli("149.56.140.45", "joffroy", "Mffp139_7", "joffroy_socios");

    if (!function_exists('conecion_remota')) {
        function conecion_remota() {
            $mysqliJoffroy = new mysqli("ritstest.cnfwdrtgyxew.us-west-2.rds.amazonaws.com", "acromntec", "actJG2022/*", "rits");
            mysqli_set_charset($mysqliJoffroy, 'utf8');
            return $mysqliJoffroy;
        }
    }

?>