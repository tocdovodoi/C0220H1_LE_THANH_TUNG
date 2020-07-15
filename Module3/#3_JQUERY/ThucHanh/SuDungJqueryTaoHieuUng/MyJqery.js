//Hide Show
// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("p").hide();
//     });
//     $("#show").click(function(){
//         $("p").show();
//     });
// });

//Animation
$(document).ready(function () {
    $("#animation").click(function () {
        var p = $("p"); //tương đương ~ document.getElementsByTagName("p")
        p.animate({left: '100px'}, "slow");
        p.animate({fontSize: '100px'}, "slow");
    })
})
