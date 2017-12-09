<h1>Chatbot Demo</h1>
<?php
$string = "hola";
echo $string;

//TODO: separar en variables
//curl -X POST \
// -u "{b3e1edaa-6707-43b0-9006-62cb0a7c0a88}":"{WOop7XhbvaCC}" --header "Content-Type:application/json" --data "{\"input\": {\"text\": \"Hello\"}}" "https://gateway.watsonplatform.net/conversation/api/v1/workspaces/6d44c9d7-f052-4444-85c3-1519dca72afc/message?version=2017-05-26"

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

    $data = array("input" => array ("text" => "hola"));

    echo "<pre>".print_r($data)."</pre>";
    $data_string = json_encode($data);
    echo "<pre>".print_r($data_string)."</pre>";


    $result = CallAPI("POST","https://gateway.watsonplatform.net/conversation/api/v1/workspaces/6d44c9d7-f052-4444-85c3-1519dca72afc/message?version=2017-05-26",$data_string);

    echo $result;


function CallAPI($method, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);

            if ($data){
            	curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            }

            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, "b3e1edaa-6707-43b0-9006-62cb0a7c0a88:WOop7XhbvaCC");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

    return $result;
}

?>