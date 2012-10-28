var _cookieOK = {accepted:false, showDecline:false, declined:false};

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

	function adjustBodyMargin() {
		// increase the body margin-top by height of the bar.
		if (bodyMargin == null){
			bodyMargin = parseInt($("body").css("margin-top"), 10);
		}

		var barHeight = $("#cookieok_bar").height();
		var newMargin = bodyMargin + barHeight;
		$("body").css("margin-top", newMargin);
	}

	$('<link />',{href:'http://cookieok.eu/bar/css/cookieok.css',media:'screen',rel:'stylesheet',type:'text/css'}).appendTo('head');
	$(document).ready (function (){
		if (_cookieOK.accepted || _cookieOK.declined){
			return;
		}
		var introText = "On 26 May 2011, the rules about cookies on websites changed. This site uses cookies. We have already set cookies which are essential for the operation of this site.";
		var barHTML = "<div id='cookieok_bar'>"
		+ "<p class='cookieok_intro'>" + introText + " <a href='http://cookieok.eu/cookie-rules-regulations' class='more' target='_blank'>More Information</a></p>"
		+ "<p class='cookieok_accept'><input type='checkbox' id='cookieok_check'/><label for='cookieok_check'>I accept additional cookies from this site used to support optional features of the site or to gather anonymous usage statistics we use to improve the site</label></p>";
		if (_cookieOK.showDecline){
			barHTML += "<p class='cookieok_decline'><input type='checkbox' id='cookieok_decline'/><label for='cookieok_decline'>I do not wish you to set additional cookies on this visit and I understand that this may affect my experience of the site or the features available to me</label></p>";
		}
		barHTML += "<a href='http://cookieok.eu' class='site' target='_blank'>cookieok.eu</a></div>";

		$("body").append(barHTML);
		

		$('#cookieok_check').change(function(){
			if ($(this).prop("checked")){
				$.cookie("_cookieok", "1", {path:'/', expires: 365*2 });
				window.location.href = window.location.href;
			}
		});

		$('#cookieok_decline').change(function(){
			if ($(this).prop("checked")){
				$.cookie("_cookieok", "0");
				window.location.href = window.location.href;
			}
		});
		window.setTimeout(adjustBodyMargin,100);
		$(window).resize(function(){
			window.setTimeout(adjustBodyMargin,100);
		});
	});
})(jQuery);

