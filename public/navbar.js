const getNavbar = function () {
    let navEl = $('#nav')
    if($(window).width() <= 600) {
        navEl.load('./navbar-mobile.html')
    } else {
        navEl.load('./navbar.html')
    }
}

$(document).ready(function(){
    getNavbar()
    $(window).resize(getNavbar)
});