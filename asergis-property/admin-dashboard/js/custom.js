$(document).ready(function() {
	$(".img-close").click(function() {
	    $(this).closest("div.col-lg-3").remove();
	    //alert("hello");
	});
	$('#unchk').click(function(){
	    $('input[type="checkbox"]').each(function(){
	    $(this).attr("checked",false);
	    });
	});

});

$(window).on('load', function() {
	setTimeout(function(){
		var changePay = $('.multiCheck span.multiselect-selected-text');	
		$(changePay).empty().append("Listing ID");
	}, 100);
});

// editable row calendar section
$(function () {
    $(".inner, .inner2").dblclick(function (e) {
        e.stopPropagation();
        var currentEle = $(this);
        var value = $(this).html();
        updateVal(currentEle, value);
    });
});

function updateVal(currentEle, value) {
    //$(document).off('click');
    $(currentEle).html('<input class="thVal" type="text" value="' + value + '" />');
    $(".thVal").focus();
    $(".thVal").keyup(function (event) {
        if (event.keyCode == 13) {
            $(currentEle).html($(".thVal").val().trim());
        }
    });

    $(document).click(function () {
        $(currentEle).html($(".thVal").val().trim());
    });
};