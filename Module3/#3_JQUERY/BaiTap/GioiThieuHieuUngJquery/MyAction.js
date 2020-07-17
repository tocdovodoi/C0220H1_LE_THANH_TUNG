$(function () {
    $("#draggable1").hide();
    $("#draggable").draggable();
    $("#btToggle").click(function () {
        $("#draggable1").toggle();
    });
});

