$(document).ready(function () {
    var $tabs = $(".panels .panel-tabs .tab");
    var $linkers = $(".kontainer .frame .linker").children();

    // Function to handle tab switching
    function switchTab($tab) {
        var $kontainer = $tab.closest("article").find(".kontainer");
        var $frames = $kontainer.find(".frame");
        var $activeTab = $tab.closest("article").find(".active-tab")

        // Remove the active class from all tabs
        $activeTab.removeClass("active-tab");

        // Add the active class to the clicked tab
        $tab.addClass("active-tab");

        // Get the class name from the clicked tab
        var dataClass = $tab.attr("data-class");

        // Hide all frames and show only the frames with the corresponding class
        $frames.hide();
        $kontainer.find('.' + dataClass).show();
    }

    // On tab click:
    $tabs.on("click", function () {
        switchTab($(this));
    });

    // On page load:
    var $activeTab = $(".panels .panel-tabs .tab.active-tab");
    switchTab($activeTab);

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
});