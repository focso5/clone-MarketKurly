(function (window, document) {
    'use strict';


    

    const $gnb_menu_on = document.getElementById('gnb-all');
    const $gnb_menuOff = document.getElementById('sub-menu__in');

    const $sub_menu = document.getElementById('gnb__sub');

    $gnb_menu_on.addEventListener('mouseenter', function () {
        // alert("야호");
        menuOpen();
    });
    $gnb_menu_on.addEventListener('mouseout', function () {
        menuClose();
    });

    function menuOpen() {
        $sub_menu.style.display = 'block';
    }
    function menuClose() {
        setTimeout(function() {
            $sub_menu.style.display = 'none';
        },500);
    };
})(window, document)