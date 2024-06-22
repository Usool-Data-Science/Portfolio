$(document).ready(function () {
    var $title = $(".contents h2 span");
    var $all_nav = $(".bottomContainer .navigator .navs .nav");
    var $tabs = $(".bottomContainer .contents #nav2 .panel-tabs .tab");
    var $linkers = $(".portalContainer .frame .linker").children();
    var $blogLinkers = $(".blogContainer .blogFrame .linker").children();
    var $blogTabs = $(".bottomContainer .contents #nav3 .panel-tabs .tab");
    var $blogPreview = $(".bottomContainer #nav3 .blogContainer .blogFrame .preview");
    var $portPreview = $(".bottomContainer #nav2 .portalContainer .frame .preview");

    // 2. If one is clicked on:
    $all_nav.on("click", function () {
        // show its data-id content in the contents page
        var $data_id = $(this).attr("data-id");
        var $data_content = $("#" + $data_id);
        var $content_siblings = $data_content.siblings(".content");

        // hide the content of other siblings with animation
        $content_siblings.filter(":visible").fadeOut(500, function () {
            $(this).addClass("hidden");
            // Show the target class
            $data_content.fadeIn(100).removeClass("hidden");

            // retrieve the data-class of the active panel-tab
            var $activeClass = $data_content.find(".panels .panel-tabs .active-tab").attr("data-class");
            if ($data_id === "nav2") {
                // show only blog frame of that activeClass
                $(".portalContainer .frame").not("." + $activeClass).toggle();
            } else if ($data_id === "nav3") {
                // show only blog frame of that activeClass
                $(".blogContainer .blogFrame").not("." + $activeClass).toggle();
            };
        });

        // remove the active class from the previous button and put it on this
        var $active_nav = $(".bottomContainer .navs .active");
        $active_nav.removeClass("active");
        $(this).addClass("active");
        var $title_content = $(this).text();
        $title.html($title_content);
    });

    $tabs.on("click", function () {
        // Strip the active tab from the current tab
        $(".bottomContainer .contents #nav2 .panel-tabs .active-tab").removeClass("active-tab");

        // Make the current button the active tab
        $(this).addClass("active-tab");

        // Get the class name of the target content and reveal it.
        var $data_class = $(this).attr("data-class");
        $(".bottomContainer .contents #nav2 .portalContainer .frame").not('.' + $data_class).fadeOut(1, function () {
            $(this).addClass("hidden");

            $('.' + $data_class).show();
        });
    });

    // Linker tooltip config
    $linkers.hover(function () {
        var $toolText = $(this).attr("class");
        $(this).find(".toolTipText").text($toolText);
        $(this).find('i').slideToggle();
        $(this).find(".toolTipText").slideToggle();
    }, function () {
        // Remove the tooltip
        $(this).find('i').slideToggle();
        $(this).find(".toolTipText").slideToggle();
    })


    // Blogs Navigation Config
    $blogTabs.on("click", function () {
        // Strip the active tab from the current tab
        $(".bottomContainer .contents #nav3 .panel-tabs .active-tab").removeClass("active-tab");

        // Make the current button the active tab
        $(this).addClass("active-tab");

        // Get the class name of the target content and reveal it.
        var $data_class = $(this).attr("data-class");
        $(".bottomContainer .contents #nav3 .blogContainer .blogFrame").not('.' + $data_class).fadeOut(1, function () {
            $(this).addClass("hidden");

            $('.' + $data_class).show();
        });
    });

    // Blogs titles config
    $blogPreview.hover(function () {
        var title = $(this).find(".previewImg").attr("alt");
        $(this).find(".previewTitle").text(title);
        $(this).find(".previewImg").toggle();
        $(this).find(".previewTitle").toggle();
    }, function () {
        $(this).find(".previewImg").toggle();
        $(this).find(".previewTitle").toggle();
    });

    $portPreview.hover(function () {
        var title = $(this).find(".previewImg").attr("alt");
        $(this).find(".previewTitle").text(title);
        $(this).find(".previewImg").toggle();
        $(this).find(".previewTitle").toggle();
    }, function () {
        $(this).find(".previewImg").toggle();
        $(this).find(".previewTitle").toggle();
    });


    // Blog Linker tooltip config ///////////////////////////////
    $blogLinkers.hover(function () {
        var $toolText = $(this).attr("name");
        $(this).find(".toolTipText").text($toolText);
        $(this).find('i').slideToggle();
        $(this).find(".toolTipText").slideToggle();
    }, function () {
        // Remove the tooltip
        $(this).find('i').slideToggle();
        $(this).find(".toolTipText").slideToggle();
    });

    // FAVOURITE config ///////////////////////////////
    // Set interval
    var $favourites = $('#nav6');
    var $favContainer = $favourites.find('.images');
    var $favouriteImages = $favContainer.find('.favImg')
    var currentSlide = 1;
    var width = 400;
    var pause = 3000;
    var animationSpeed = 1000;
    var longAnimationSpeed = 3000;
    var interval;

    function startSlider() {
        interval = setInterval(() => {
            $favContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, () => {
                currentSlide++;
                if (currentSlide === $favouriteImages.length - 2) {
                    currentSlide = 1;
                    $favContainer.animate({ 'margin-left': '0' }, longAnimationSpeed);
                }
            })
        }, pause);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    $favContainer.on("mouseenter", stopSlider).on("mouseleave", startSlider);
    startSlider();
});