const modalBtn = $('.header__book');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');
const modalOverlay = $('.modal-overlay');
const headerMenuBtn = $('.header__menu-btn');
const modalMenu= $('.modal-menu');
const modalMenuItem = $('.modal-menu__item');
const headerMenuModalClose = $('.header__menu-modal-close');

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

windowSizeMiddle.addListener(removeMenuModalClose);
windowSizeMiddle.addListener(dontShowHeaderMenuBtn);