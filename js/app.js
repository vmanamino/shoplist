$(document).ready(function() {
    $(".entry button").mousedown(function(){
        if ($(".entry input").val()) {
            var content = $(".entry input").val();
            $(".entry input").val("");
            var litem = "<li></li>";
            $(".list > .items").append(litem);
            $(".list > .items li:last").prepend("<button name=\"remove\" type=\"button\">X</button>");
            $(".list > .items li:last").prepend("<span>"+content+"</span>");
            $(".list > .items li:last").prepend("<input type=\"checkbox\" name=\"done\">");
            $(".list > .items li:last").on('click', "button", function(){
                $(this).parent().remove();
                console.log("list parent removed");
            });
        }    
    });
});