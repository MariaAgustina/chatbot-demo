<h1>Chatbot Demo</h1>
<?php
    include('api-functions.php');

    $data = array("input" => array ("text" => "hola"));

    echo "<pre>".print_r($data)."</pre>";
    $data_string = json_encode($data);
    echo "<pre>".print_r($data_string)."</pre>";

    $result = CallAPI("POST","https://gateway.watsonplatform.net/conversation/api/v1/workspaces/".$_SESSION['chatbot-workspaceId']."/message?version=2017-05-26",$data_string);

    echo "result: ".$result;
?>