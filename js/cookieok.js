(function($){
	if (typeof cookieOKOptions != 'undefined'){
		$.extend(_cookieOK, cookieOKOptions);
	}
	var bodyMargin = null;
	var cookie = $.cookie("_cookieok");
	if (cookie && cookie == "1"){
		_cookieOK.accepted = true;
	}

	if (cookie && cookie == "0"){
		_cookieOK.declined = true;
	}

//	function adjustBodyMargin() {
		// increase the body margin-top by height of the bar.
//		if (bodyMargin == null){
//			bodyMargin = parseInt($("body").css("margin-top"), 10);
//		}

//		var barHeight = $("#cookieok_bar").height();
//		var newMargin = bodyMargin + barHeight;
//		$("body").css("margin-top", newMargin);
//	}

	$('<link />',{href:_cookieOKcss,media:'screen',rel:'stylesheet',type:'text/css'}).appendTo('head');
	$(document).ready (function (){
		if (_cookieOK.accepted || _cookieOK.declined){
			return;
		}
		var barHTML = "<div id='eu_cookie_notify'><div id='cookieok_bar' style='position:fixed;" + _cookieOKpos + ":0;left:0;width:100%;display:none'>"
		+ "<p class='cookieok_intro'>" + _cookieOKintro + " <a href='http://cookieok.eu/cookie-rules-regulations' class='more' target='_blank'>More Information</a></p>"
		+ "<p class='cookieok_accept'><input type='checkbox' id='cookieok_check'/><label for='cookieok_check'>" + _cookieOKaccept + "</label></p>";
		if (_cookieOK.showDecline){
			barHTML += "<p class='cookieok_decline'><input type='checkbox' id='cookieok_decline'/><label for='cookieok_decline'>I do not wish you to set additional cookies on this visit and I understand that this may affect my experience of the site or the features available to me</label></p>";
		}
		barHTML += "<a href='http://cookieok.eu' class='link' target='_blank'>cookieok.eu</a></div></div>";

		$("body").append(barHTML);
		$("#cookieok_bar").delay(800).animate({height:'toggle'},'slow'); //animate({opacity:0.9,height:'toggle'},'slow');

		$('#cookieok_check').change(function(){
			if ($(this).prop("checked")){
				$.cookie("_cookieok", "1", {path:'/', expires: 365 });
				$("#cookieok_bar").animate({height:'toggle'},'slow');
			}
		});

//		$('#cookieok_decline').change(function(){
//			if ($(this).prop("checked")){
//				$.cookie("_cookieok", "0");
//				window.location.href = window.location.href;
//			}
//		});
//		window.setTimeout(adjustBodyMargin,100);
//		$(window).resize(function(){
//			window.setTimeout(adjustBodyMargin,100);
//		});
	});
})(jQuery);
