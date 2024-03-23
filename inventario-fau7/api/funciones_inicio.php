<?php

include_once "base_datos.php";


function obtenerTotalNivel(){
    $sentencia  = "SELECT COUNT(*) AS total FROM nivel";
    return selectQuery($sentencia)[0]->total;
}
