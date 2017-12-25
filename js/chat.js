<script>
function messageSent(event) {
    var textValue = document.getElementById('chatInput').value;
    var hasPressedEnterKey = (event.keyCode == 13);
    if (hasPressedEnterKey && textValue != "") {
        console.log(textValue);
        var htmlChatInputText = "<p class=message-question>"+textValue+"</p>"
        $('.messagesWrapper').append(htmlChatInputText);
        scrollToBottom();
        $.ajax({
            url: './getChatResponse.php?chatInput='+textValue,
            type: 'POST',
        }).done(function(data){
            data = checkSlider(data);
            var htmlChatText = "<p class=message-response>"+data+"</p>"
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