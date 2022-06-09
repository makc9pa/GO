const modalBtn = $('.header__book');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');
const modalOverlay = $('.modal-overlay');
const headerMenuBtn = $('.header__menu-btn');
const modalMenu= $('.modal-menu');
const modalMenuItem = $('.modal-menu__item');
const headerMenuModalClose = $('.header__menu-modal-close');
const faqList = document.querySelector('.faq__list');

let windowSizeMiddle = window.matchMedia("(min-width: 901px)");
let windowSizeSmall = window.matchMedia("(max-width: 480px)");

function dontShowHeaderMenuBtn(windowSizeMiddle) {
    if (windowSizeMiddle.matches) {
        headerMenuModalClose.css({
            display: 'none',
        });
        headerMenuBtn.css({
            display: 'none',
        });
    } else {
        headerMenuModalClose.css({
            display: 'none',
        });
        headerMenuBtn.css({
            display: 'block',
        });
    }
}

function removeMenuModalClose(windowSizeMiddle) {
    if (windowSizeMiddle.matches) {
        headerMenuBtn.css({
            display: 'none',
        });
    } else {
        headerMenuBtn.css({
            display: 'block',
        });
    }
}

function addModalBtnToModalMenu(windowSizeSmall) {
    if (windowSizeSmall.matches) {
        modalMenu
        .append('<button class="modal__book">Заказать звонок</button>');
    } else {
        $('.modal__book').detach();
    }
}

function initMap(){
    const goMap = new ymaps.Map("footer__map", {
        center: [55.597481, 37.347669],
        zoom: 16
    }, {
        suppressMapOpenBlock: true
    });

    const goMark = new ymaps.Placemark([55.597481, 37.347669], {
        balloonContentBody: [
            '<address>',
            '<strong>Наш адрес:</strong>',
            '<br/>',
            'Москва, ул. Усачёва, д.29, корп.3',
            '</address>'
        ].join(''),
        iconCaption: 'GameOver',
    }, {
        preset: 'islands#dotIcon',
        iconColor: '#735184'
    });

    goMap.geoObjects.add(goMark);

    goMap.controls.remove('searchControl');
    goMap.controls.remove('trafficControl');
    goMap.controls.remove('typeSelector');
}

modalBtn.click(function() {
    modalOrder.show(500);
    modalOverlay.show(500);
    modalMenu.hide(500);
    dontShowHeaderMenuBtn(windowSizeMiddle);
});

modalClose.click(function() {
    modalOrder.hide(500);
    modalOverlay.hide(500);
    dontShowHeaderMenuBtn(windowSizeMiddle);
    $('.modal__book').detach();
});

modalOverlay.click(function() {
    modalOrder.hide(500);
    modalOverlay.hide(500);
    modalMenu.hide(500);
    dontShowHeaderMenuBtn(windowSizeMiddle);
    $('.modal__book').detach();
})

headerMenuBtn.click(function() {
    modalMenu.show(500);
    modalOverlay.show(500);
    $(this).css({
        display: 'none',
    });
    headerMenuModalClose.css({
        display: 'block',
    });
    if ($('.modal__book').length === 0) {
        windowSizeSmall.addListener(addModalBtnToModalMenu);
        addModalBtnToModalMenu(windowSizeSmall);
    }
    modalMenu.css('display', 'flex');
    modalMenu.css('justify-content', 'center');
})

headerMenuModalClose.click(function() {
    modalOverlay.hide(500);
    modalMenu.hide(500);
    $(this).css({
        display: 'none',
    });
    headerMenuBtn.css({
        display: 'block',
    });
    $('.modal__book').detach();
    modalMenu.css('display', 'none');
})

modalMenuItem.click(function() {
    modalOverlay.hide(500);
    modalMenu.hide(500);
    headerMenuModalClose.css({
        display: 'none',
    });
    headerMenuBtn.css({
        display: 'block',
    });
    $('.modal__book').detach();
})

modalMenu.on('click', '.modal__book', function() {
    modalOrder.show(500);
    modalMenu.hide(500);
})

removeMenuModalClose(windowSizeMiddle);
// changeColorIcons();

windowSizeMiddle.addListener(removeMenuModalClose);
windowSizeMiddle.addListener(dontShowHeaderMenuBtn);

ymaps.ready(initMap);

for (let i = 0; i < faqList.children.length; i++) {
    if (i === 0 || i % 2 === 0) {
        $(faqList.children[i]).accordion({
            active: true,
            collapsible: true,
            heightStyle: 'content',
            icons: {
                header: 'faq__icon_odd',
                activeHeader: 'faq__icon_odd faq__icon_odd_active'
            }
        });
    } else {
        $(faqList.children[i]).accordion({
            active: true,
            collapsible: true,
            heightStyle: 'content',
            icons: {
                header: 'faq__icon_even',
                activeHeader: 'faq__icon_even faq__icon_even_active'
            }
        });
    }
}
