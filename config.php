<?php

/**
* LA CONFIGURACION DIFIERE PARA CADA CHATBOT PARA ENCONTRAR LOS DATOS DE USUARIO, CONTRASEÑA Y WORKSPACE ID HAY QUE INGRESAR EN 
https://watson-conversation.ng.bluemix.net CON EL USUARIO Y CORRESPONDIENTE AL CHATBOT CREADO EN EL BACKEND
**/

//DEBIN WORKSPACE CONFIG
$username="b3e1edaa-6707-43b0-9006-62cb0a7c0a88";
$password="WOop7XhbvaCC";
$workspaceId="6d44c9d7-f052-4444-85c3-1519dca72afc";

session_start();
$_SESSION['chatbot-username'] = $username;
$_SESSION['chatbot-password'] = $password;
$_SESSION['chatbot-workspaceId'] = $workspaceId;

?>