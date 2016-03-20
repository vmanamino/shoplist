$(document).ready(function() {
    $(".entry button").mousedown(function(){
        if ($(".entry input").val()) {
            var content = $(".entry input").val();
            $(".entry input").val("");
            $(".list > .items").append("<li></li>");
            $(".list > .items li:last").prepend("<button name=\"remove\" type=\"button\">X</button>");
            $(".list > .items li:last").prepend("<span>"+content+"</span>");
            $(".list > .items li:last").prepend("<input type=\"checkbox\" name=\"done\">");
        }    
    });
});

// $(document).ready(function(){
//     $("li > button").on('click', function(){
//         console.log("clicked");
//     });
// });
$(document).ready(function() {
    $("li > button").on('click', function(){
        console.log("clicked");
    });
});