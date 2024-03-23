<?php
include_once "encabezado.php";

$payload = json_decode(file_get_contents("php://input"));
if (!$payload) {
    http_response_code(500);
    exit;
}

include_once "funciones_inicio.php";

$metodo = $payload->metodo;

switch($metodo){
    case "obtener":
        echo json_encode(
            [
                "datosNivel" => [
                    "totalNivel" => obtenerTotalNivel(),
                ],
            ]
        );
        break;
}

