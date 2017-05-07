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