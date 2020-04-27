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

particlesJS('particles', {
	"particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": false,
				"value_area": 800
			}
		},
		"color": {
			"value": "#999999"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#999999"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 100,
			"color": "#999999",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 50,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
