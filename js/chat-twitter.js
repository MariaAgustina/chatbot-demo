<script>
function messageSent(event) {
    var textValue = document.getElementById('chatInput').value;
    var hasPressedEnterKey = (event.keyCode == 13);
    if (hasPressedEnterKey && textValue != "") {
        console.log(textValue);
        
        var htmlChatInputText = "<img class=mid-logo src=images/twitter/royal-cannin-logo.jpg><div class=tweet-content><div class=QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link><b class=QuoteTweet-fullname u-linkComplex-target>Na Hidalgo Mandaresco</b><span class=UserBadges></span><span class=UserNameBreak>&nbsp;</span><span class=username u-dir u-textTruncate dir=ltr>@<b>nahmandareco</b></span></div><div class=ReplyingToContextBelowAuthor data-aria-label-part=><span class=username u-dir u-textTruncate dir=ltr>En respuesta a @<b>BCRAusuarios</b></span></div><div class=QuoteTweet-text tweet-text u-dir lang=es data-aria-label-part=2 dir=ltr>"+textValue+"</div><div class=stream-item-footer><img src=images/twitter/icon-message.png><span class=username>1</span><img class=middle src=images/twitter/icon-arrows.png><img class=middle src=images/twitter/icon-heart.png><img class=middle src=images/twitter/icon-letter.png></div></div>"


        $('.messagesWrapper').append(htmlChatInputText);
        scrollToBottom();
        $.ajax({
            url: './getChatResponse.php?chatInput='+textValue,
            type: 'POST',
        }).done(function(data){

            var htmlChatText = "<img class=mid-logo src=images/twitter/logo-bcra.jpg><div class=tweet-content><div class=QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link><b class=QuoteTweet-fullname u-linkComplex-target>BCRA Usuarios</b><span class=UserBadges></span><span class=UserNameBreak>&nbsp;</span><span class=username u-dir u-textTruncate dir=ltr>@<b>BCRAusuarios</b></span></div><div class=ReplyingToContextBelowAuthor data-aria-label-part=><span class=username u-dir u-textTruncate dir=ltr>En respuesta a @<b>nahmandareco</b></span></div><div class=QuoteTweet-text tweet-text u-dir lang=es data-aria-label-part=2 dir=ltr>"+data+"</div><div class=stream-item-footer><img src=images/twitter/icon-message.png><span class=username>1</span><img class=middle src=images/twitter/icon-arrows.png><img class=middle src=images/twitter/icon-heart.png><img class=middle src=images/twitter/icon-letter.png></div></div>"
            $('.messagesWrapper').append(htmlChatText);
            scrollToBottom();
            console.log(data);
        });

        document.getElementById('chatInput').value = "";

    }
}

function scrollToBottom(){
    var objDiv = document.getElementById("text-response");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function checkSlider(data){
    if(shouldShowSlider(data)){
        showSlider();
    }

    return data.replace("::slider;;", "");

}

function showSlider(){
    /**setTimeout shows slider after delay**/
    setTimeout(function() {
        console.log("show slider");
        $.get("slider.php", function(data){
            $('.messagesWrapper').append(data);
            scrollToBottom();
            setupSliderButtons();
        });
        showConditions();

    }, 5000);
}

function showConditions(){
    setTimeout(function() {
            var htmlChatText = "<p class=message-response>Y estas son sus condiciones:</br> - En pesos y en dólares<br> - Todos los días, las 24 horas</br> - Los débitos son gratuitos</br> - La acreditación tiene costo</br></p>"
            $('.messagesWrapper').append(htmlChatText);
            scrollToBottom();
            showButtonOptions();
    }, 7000);
}

function showButtonOptions(){
    setTimeout(function() {
        var htmlChatText = "<p class=message-response>Quizás te interese saber más sobre alguno de estos medios de pago electrónico inmediatos (PEI)</p>"
        $('.messagesWrapper').append(htmlChatText);
        scrollToBottom();
        
        $.get("button-options.php", function(data){
            $('.messagesWrapper').append(data);
            scrollToBottom();
            setupButtonOptions();
        });

    }, 5000);
}

function shouldShowSlider(data){
    return data.includes("::slider;;");
}

function setupSliderButtons(){

    var rightArrow1 = document.getElementById('slider-right-arrow-1');
    rightArrow1.onclick = function() {
        var objDiv = document.getElementById("slider");
        objDiv.scrollLeft = 391;
    };

    var rightArrow2 = document.getElementById('slider-right-arrow-2');
    rightArrow2.onclick = function() {
        var objDiv = document.getElementById("slider");
        objDiv.scrollLeft = 782;
    };

    var leftArrow1 = document.getElementById('slider-left-arrow-1');
    leftArrow1.onclick = function() {
        var objDiv = document.getElementById("slider");
        objDiv.scrollLeft = 0;
    };

    var leftArrow2 = document.getElementById('slider-left-arrow-2');
    leftArrow2.onclick = function() {
        var objDiv = document.getElementById("slider");
        objDiv.scrollLeft = 391;
    };

}

function setupButtonOptions(){
    var wallet = document.getElementById('wallet');

    wallet.onclick = function() {
        console.log("wallet");
        var htmlChatText = "<p class=message-response>La Billetera Electrónica es un servicio de transferencias de celular a celular a través de una aplicación para teléfonos móviles. </br>En este video podés ver cómo transformar tu Smartphone en una Billetera Electrónica:</p>"
        $('.messagesWrapper').append(htmlChatText);
        scrollToBottom();
        $.get("wallet-video.php", function(data){
            $('.messagesWrapper').append(data);
            scrollToBottom();
            setupButtonOptions();
        });

    };
}

$( document ).ready(function() {
 
});


</script>