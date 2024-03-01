const cardsItem = document.querySelectorAll('.menu__cards-item:nth-child(n+5)');
const refresh = document.querySelector('.menu__button-refresh');

refresh.addEventListener('click', function() {
    cardsItem.forEach(item => {
        item.style.display = "block";
        item.style.marginTop = "40px";
    });
    refresh.style.display = "none";
});