/*   
  Project by Zua
  Edited by mdo992
  https://github.com/thatziv/webhook
  https://github.com/mdo992/webhook-sender
*/

$("#link").val(localStorage.getItem("dws_link_store"));
$("#username").val(localStorage.getItem("dws_username_store"));
$("#avatar").val(localStorage.getItem("dws_avatar_store"));

$(function() {
    $("#content").focus();
    
    function send() {
        var link = $("#link").val();
        var username = $("#username").val();
        var content = $("#content").val();
        var avatar = $("#avatar").val();

        if (link == null || link == "", content == null || content == "") {
            alert("Please Fill Out All The Fields");
            return false;
        };

        // Set Storage Items.
        localStorage.setItem("dws_link_store", link);
        localStorage.setItem("dws_username_store", username);
        localStorage.setItem("dws_avatar_store", avatar);
        $("#content").val("");
        
        $.post(link, {
            "content": content,
            "username": username,
            "avatar_url": avatar
        });
    };

    $("#btn").click(function() {
        send();
    });

    // If enter is pressed when typing on the content box, send the message.
    $("#content").keypress(function(event) {
        if (event.which == 13) { // 13 = Enter.
            send();
            return false;
        };
    });

    $("#cds").click(function(event) {
        event.preventDefault();
        if (window.confirm("Clear Local Storage?")) {
            localStorage.clear();
        };
    });
});