$("section.page").hide();

if (document.location.hash !== "" && $(".page" + document.location.hash).length > 0) {
    $(".page" + document.location.hash).addClass("active");
    $("nav a[href='" + document.location.hash + "']").addClass("active");
} else {
    $(".page.default").addClass("active");
    $("nav a.default").addClass("active");
}
$("section.page.active").show();

var currentHash = document.location.hash;
var grid = $("#work-container").masonry({
    itemSelector: '.item',
    gutter: 10
});

var changeNavigation = function (href) {
    var activePage = $("section.page.active");
    var newPage = $(".page" + href);

    var changePosition = function (page) {
        page.css("position", "absolute")
            .css("left", "calc(50% - " + page.outerWidth(true) / 2 + "px");
        return page;
    };

    changePosition(activePage).fadeOut(500);
    changePosition(newPage).fadeIn(500, function () {
        activePage.removeAttr('style');
        newPage.removeAttr('style');
        activePage.hide();

        window.scrollTo(0, 0);

        if (href === "#work") {
            grid.masonry();
        }

        $("section.page").removeClass("active");
        newPage.addClass("active");

        $("nav a").removeClass("active");
        $("nav a[href='" + href + "']").addClass("active");
    });

    currentHash = href;

    $("section.page").each(function () {
        $(this).attr("id", $(this).attr("id") + "_obfuscated");
    });
    document.location.hash = href;
    $("section.page").each(function () {
        $(this).attr("id", $(this).attr("id").slice(0, -11));
    });
};

$("nav a").click(function (e) {
    e.preventDefault();

    if ($(this).hasClass("active")) {
        return;
    }

    changeNavigation($(this).attr("href"));
});

$(window).on('hashchange', function () {
    if (currentHash !== document.location.hash) {
        changeNavigation(document.location.hash);
    }
});

$("#work video").each(function(i, v) {
   v.addEventListener('loadeddata', function() {
     grid.masonry();
   }, false);
});

var setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
}

var cookieInfo = function() {
    var html = '<p id="cookie-info">' +
        'Diese Seite verwendet Cookies und Google Analytics mit Trackingcookies. ' +
        'Durch die Nutzung dieser Webseite erkl&auml;ren Sie sich mit der Verwendung von Google Analytics und Cookies einverstanden! ' +
        '<a href="#privacy" title="Infos zu Cookies und Google Analytics">' +
        'Infos zu Cookies und Google Analytics</a><span class="clickme">Ich bin einverstanden!</span></p>';

    $("body").prepend(html);
    $("#cookie-info .clickme").click(function() {
        $("#cookie-info").hide();
        setCookie("cookie-info", "accepted", 30);
    });
}

$(document).ready(function() {
    if ("accepted" !== getCookie("cookie-info")) {
        cookieInfo();
    }
});
