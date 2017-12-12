<?php
    include('html_headers.php');
    include('api-functions.php');
    include('js/chat.js');
?>

<!DOCTYPE html>
<html>
    <body>
        <h1>Chatbot Demo</h1>
        <div>
            <div class="msj-rta macro" style="margin:auto">                        
                <div class="text text-r">
                    <div class="messagesWrapper"></div>
                    </div>
                </div>
            </div>
            <div class="msj-rta macro" style="margin:auto">                        
                <div class="text text-r" style="background:whitesmoke">
                    <input class="mytext" name="chatInput" id="chatInput" placeholder="Ingrese un mensaje" onkeydown="messageSent(event)"/>
                </div>
            </div>
        </div>
    </body>
</html>