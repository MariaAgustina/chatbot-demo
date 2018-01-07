
<?php
    include('html_headers.php');
?>
<link href="css/twitter.css" rel="stylesheet" type="text/css" />

<?php
    include('api-functions.php');
    include('js/chat-twitter.js');
?>

<!DOCTYPE html>

<html>
    <body>
    	<div class="complete-background-twitter">
	        <div class="chat-container-twitter">
	            <div class="msj-rta macro responses-twitter" style="margin:auto">

	            	<div class="content clearfix">
		            	<div class="permalink-header">
	    	        		<img src="images/twitter/logo-bcra.jpg" class="header-image">
		    	        		<span class="FullNameGroup">
		    	        			<strong class="fullname show-popup-with-id u-textTruncate ">BCRA Usuarios</strong>
		    	        		</span>
		    	        		<span class="username u-dir u-textTruncate" dir="ltr">@<b>BCRAusuarios</b></span>
	    	        		<img src="images/twitter/follow-image.png" class="follow-image">

	    	        	</div>
 		   	        </div>

    	        	<h2>Las cajas de ahorro son gratuitas para más info ingresa en: <a href="http://www.bcra.gov.ar/">http://www.bcra.gov.ar/</a></h2>
    	        	<div class="QuoteTweet-container">
    	        		<div class="tweet-content">
    	        			<div class="QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link">
    							<b class="QuoteTweet-fullname u-linkComplex-target">Na Hidalgo Mandaresco</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>nahmandareco</b></span>
  							</div>
  							<div class="ReplyingToContextBelowAuthor" data-aria-label-part=""><span class="username u-dir u-textTruncate" dir="ltr">@<b>BCRAusuarios</b></span></div>
							<div class="QuoteTweet-text tweet-text u-dir" lang="es" data-aria-label-part="2" dir="ltr">Hola tengo caja de ahorro y me quieren cobrar mantenimiento. Esto es correcto?</div>
    	        		</div>
    	        	</div>   
	        		<div class="client-and-actions">
						<span class="metadata tweet-content"><span class="username">13:04 - 5 ene. 2018</span></span>
					</div> 
					<div class="stream-item-footer">
						<img src="images/twitter/icon-message.png">
						<span class="username">1</span>
						<img class="middle" src="images/twitter/icon-arrows.png">
						<img class="middle" src="images/twitter/icon-heart.png">
						<img class="middle" src="images/twitter/icon-letter.png">
					</div>

	            </div>
	            <div class="msj-rta macro write-question-debin" style="margin:auto">
                	<img class="small-logo" src="images/twitter/royal-cannin-logo.jpg">                        
	                <div class="text text-r" style="background:whitesmoke">
	                    <input class="mytext" name="chatInput" id="chatInput" placeholder="Twittea tu respuesta" onkeydown="messageSent(event)"/>
	                </div>
	            </div>

                <div class="text text-response" id="text-response">
                    <div class="messagesWrapper">

                    </div>
                </div>	            

                <!-- ESTE ES UN EJEMPLO DEL HTML CON LA RESPUESTA QUE SE AGREGA CUANDO SE ENVIA O LLEGA UN CHAT
                	LO DEJO COMENTADO PARA PODER EDITAR EL CSS MÁS RAPIDO

                <div class="text text-response" id="text-response">
                    <div class="messagesWrapper">
						
	                	<img class="mid-logo" src="images/twitter/royal-cannin-logo.jpg">                        
						<div class="tweet-content">
    	        			<div class="QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link">
    							<b class="QuoteTweet-fullname u-linkComplex-target">Na Hidalgo Mandaresco</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>nahmandareco</b></span>
  							</div>
  							<div class="ReplyingToContextBelowAuthor" data-aria-label-part=""><span class="username u-dir u-textTruncate" dir="ltr">En respuesta a @<b>BCRAusuarios</b></span></div>
							<div class="QuoteTweet-text tweet-text u-dir" lang="es" data-aria-label-part="2" dir="ltr">Hola tengo caja de ahorro y me quieren cobrar mantenimiento. Esto es correcto?</div>
							<div class="stream-item-footer">
								<img src="images/twitter/icon-message.png">
								<span class="username">1</span>
								<img class="middle" src="images/twitter/icon-arrows.png">
								<img class="middle" src="images/twitter/icon-heart.png">
								<img class="middle" src="images/twitter/icon-letter.png">
							</div>
    	        		</div>
    	            </div>
                </div>-->
	        </div>
	    </div>
    </body>
</html>