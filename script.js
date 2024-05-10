let items = document.querySelectorAll('.cards .card');
let container = document.querySelector('.cards');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 2;
let startX = 0;
let startY = 0;

function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
};

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
};

container.addEventListener('touchstart', touchStart, false);
container.addEventListener('touchmove', touchMove, false);

function touchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}

function touchMove(event) {
    if (!startX || !startY) {
        return;
    }
    let endX = event.touches[0].clientX;
    let endY = event.touches[0].clientY;

    let diffX = startX - endX;
    let diffY = startY - endY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {

            next.click();
        } else {
            
            prev.click();
        }
    }

    startX = null;
    startY = null;
}