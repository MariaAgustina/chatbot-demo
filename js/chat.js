<script>
function messageSent(event) {
    var textValue = document.getElementById('chatInput').value;
    var hasPressedEnterKey = (event.keyCode == 13);
    if (hasPressedEnterKey && textValue != "") {
        console.log(textValue);
        var htmlChatInputText = "<p style=color:#5b5b5f;>"+textValue+"</p>"
        $('.messagesWrapper').append(htmlChatInputText);
        $.ajax({
            url: './getChatResponse.php?chatInput='+textValue,
            type: 'POST',
        }).done(function(data){
            var htmlChatText = "<p style=color:#107bb3;>"+data+"</p>"
            $('.messagesWrapper').append(htmlChatText);
            console.log(data);
        });

        document.getElementById('chatInput').value = "";

    }
}
</script>