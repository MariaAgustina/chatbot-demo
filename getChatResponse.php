<?php
    include('api-functions.php');
	$chatInput = $_GET["chatInput"];
	$data = array("input" => array ("text" => $chatInput));
	$data_string = json_encode($data);
    $result = CallAPI("POST","https://gateway.watsonplatform.net/conversation/api/v1/workspaces/".$_SESSION['chatbot-workspaceId']."/message?version=2017-05-26",$data_string);
    $jsonData = json_decode($result, true);
    $response = $jsonData["output"]["text"][0];
 //    echo '<pre>';
	// 	echo print_r($jsonData);
	// echo '</pre>';
    echo $response;
?>


