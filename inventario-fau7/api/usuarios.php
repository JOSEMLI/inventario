<?php
include_once "encabezado.php";

$payload = json_decode(file_get_contents("php://input"));
if (!$payload) {
    http_response_code(500);
    exit;
}

include_once "funciones_usuarios.php";

$metodo = $payload->metodo;


switch($metodo){
    case "registrar":
        echo json_encode(registrarUsuario($payload->usuario));
        break;
    case "get";
        echo json_encode(obtenerUsuarios());
        break;
    case "delete";
        echo json_encode(eliminarUsuario($payload->id));
        break;
    case "put";
        echo json_encode(editarUsuario($payload->usuario));
        break;
    case "un_usuario":
        echo json_encode(obtenerUsuarioPorId($payload->id));
        break;
    case "login":
        echo json_encode(iniciarSesion($payload->usuario,$payload->password));
        break;
    case "verifica_pass": 
        echo json_encode(verificarPassword($payload->password, $payload->id));
        break;
    case "cambiar_pass":
        echo json_encode(cambiarPassword($payload->password, $payload->idUsuario));
        break;
    

}


