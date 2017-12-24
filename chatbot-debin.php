<?php
    include('html_headers.php');
    include('api-functions.php');
    include('js/chat.js');
?>

<!DOCTYPE html>
<html>
    <body>
    	<div class="complete-background-debin">
	        <div class="chat-container-debin">
	        	<div class="macro chat-header">
	        		<p>ASISTENTE DEBIN</p>
	        	</div>
	            <div class="msj-rta macro responses-debin" style="margin:auto">                        
	                <div class="text text-r text-response">
	                    <div class="messagesWrapper"></div>
	                </div>
	            </div>
	            <div class="msj-rta macro write-question-debin" style="margin:auto">                        
	                <div class="text text-r" style="background:whitesmoke">
	                    <input class="mytext" name="chatInput" id="chatInput" placeholder="Ingrese un mensaje" onkeydown="messageSent(event)"/>
	                </div>
	            </div>
	        </div>
	    </div>
    </body>
</html>