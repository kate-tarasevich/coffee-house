const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".burger-menu");
const logo = document.querySelector(".logo");
let isBurgerActive = false;

burgerBtn.onclick = function () {
    if (!isBurgerActive) {
        burgerMenu.style.display = "block";
        burgerBtn.style.position = "fixed";
        logo.style.position = "fixed";
        logo.style.marginTop = "60px";
        isBurgerActive = true;
        burgerBtn.classList.toggle('burger-btn-active');
    }
    else if (isBurgerActive) {
        burgerMenu.style.display = "none";
        burgerBtn.style.position = "absolute";
        logo.style.position = "relative";
        logo.style.marginTop = "0px";
        isBurgerActive = false;
        burgerBtn.classList.toggle('burger-btn-unactive');
    }
}

const preButton = document.querySelector('.coffee__btn__pre-btn');
const nxtButton = document.querySelector('.coffee__btn__nxt-btn');
const contentItems = document.querySelectorAll('.coffee__content__item');
const controlButtons = document.querySelectorAll('.coffee__controls__btn');

let currentIndex = 0;
let intervalId;

function showItem(index) {
    contentItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('coffee__content__item__active');
        } else {
            item.classList.remove('coffee__content__item__active');
        }
        // const position = (i - index) * 100; // Assuming each item has 100% width
        // item.style.transform = `translateX(${position}%)`;
    });

    controlButtons.forEach(btn => {
        btn.classList.remove('coffee__controls__btn__active');
    });
    controlButtons[index].classList.add('coffee__controls__btn__active');
}

preButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? contentItems.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

nxtButton.addEventListener('click', function() {
    currentIndex = (currentIndex === contentItems.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
});

controlButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        currentIndex = index;
        showItem(currentIndex);
    });
});

function nxtSlide() {
    currentIndex = (currentIndex === contentItems.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
}

function AutoScroll() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex === contentItems.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
    }, 6000);
    // intervalId = setInterval(nxtSlide, 6000);
}
function stopAutoScroll() {
    clearInterval(intervalId);
}
contentItems.forEach(item => {
    item.addEventListener('mouseenter', stopAutoScroll);
    item.addEventListener('mouseleave', AutoScroll);
});

showItem(currentIndex);
AutoScroll();
