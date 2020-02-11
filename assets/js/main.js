var setCookie = function(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

var getCookie = function(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

var cookieInfo = function() {
	var html = '<p id="cookie-info">' +
		'Diese Seite verwendet Cookies und Google Analytics mit Trackingcookies. ' +
		'Durch die Nutzung dieser Webseite erkl&auml;ren Sie sich mit der Verwendung von Google Analytics und Cookies einverstanden! ' +
		'<a href="/datenschutz" title="Infos zu Cookies und Google Analytics">' +
		'Infos zu Cookies und Google Analytics</a><span class="clickme">Ich bin einverstanden!</span></p>';

	$("body").prepend(html);
	$("#cookie-info .clickme").click(function() {
		$("#cookie-info").hide();
		setCookie("cookie-info", "accepted", 30);
	});
};

$(document).ready(function() {
	if ("accepted" !== getCookie("cookie-info")) {
		cookieInfo();
	}
});
