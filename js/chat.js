<script>
function messageSent(event) {
    var textValue = document.getElementById('chatInput').value;
    var hasPressedEnterKey = (event.keyCode == 13);
    if (hasPressedEnterKey && textValue != "") {
        console.log(textValue);
        var htmlChatInputText = "<p class=message-question>"+textValue+"</p>"
        $('.messagesWrapper').append(htmlChatInputText);
        $.ajax({
            url: './getChatResponse.php?chatInput='+textValue,
            type: 'POST',
        }).done(function(data){
            data = checkSlider(data);
            var htmlChatText = "<p class=message-response>"+data+"</p>"
            $('.messagesWrapper').append(htmlChatText);
            console.log(data);
        });

        document.getElementById('chatInput').value = "";

    }
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
            setupSliderButtons();
        });
        showConditions();

    }, 5000);
}

function showConditions(){
    setTimeout(function() {
            var htmlChatText = "<p class=message-response>Y estas son sus condiciones:</br> - En pesos y en dólares<br> - Todos los días, las 24 horas</br> - Los débitos son gratuitos</br> - La acreditación tiene costo</br></p>"
            $('.messagesWrapper').append(htmlChatText);
            showButtonOptions();
    }, 7000);
}

function showButtonOptions(){
    setTimeout(function() {
        var htmlChatText = "<p class=message-response>Quizás te interese saber más sobre alguno de estos medios de pago electrónico inmediatos (PEI)</p>"
        $('.messagesWrapper').append(htmlChatText);

        $.get("button-options.php", function(data){
            $('.messagesWrapper').append(data);
            setupButtonOptions();
        });

    }, 5000);
}

function shouldShowSlider(data){
    return data.includes("::slider;;");
}

function setupSliderButtons(){
   var leftArrow = document.getElementById('slider-left-arrow');

    leftArrow.style.cursor = 'pointer';

    //TODO: no me anda el scroll
    leftArrow.onclick = function() {
        console.log("cahs");
        var elmnt = document.getElementById("slider-container");
        elmnt.scrollLeft = 50;
    };


    var rightArrow = document.getElementById('slider-right-arrow');

    rightArrow.style.cursor = 'pointer';

    rightArrow.onclick = function() {
        var elmnt = document.getElementById("slider-container");
        console.log(elmnt);
        elmnt.scrollRight = 50;
    };

}

function setupButtonOptions(){
    var wallet = document.getElementById('wallet');

    wallet.onclick = function() {
        console.log("wallet");
        var htmlChatText = "<p class=message-response>La Billetera Electrónica es un servicio de transferencias de celular a celular a través de una aplicación para teléfonos móviles. </br>En este video podés ver cómo transformar tu Smartphone en una Billetera Electrónica:</p>"
        $('.messagesWrapper').append(htmlChatText);
        $.get("wallet-video.php", function(data){
            $('.messagesWrapper').append(data);
            setupButtonOptions();
        });

    };
}

$( document ).ready(function() {
 
});


</script>