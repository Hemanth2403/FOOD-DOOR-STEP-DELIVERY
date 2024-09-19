const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const catebox = document.querySelector('.catebox');
const leftBtn2 = document.getElementById('leftBtn2');
const rightBtn2 = document.getElementById('rightBtn2');
const cardsnum2 = document.querySelector('.cardsnum2');

// Add event listener to the left button
leftBtn.addEventListener('click', () => {
    catebox.scrollBy({
        left: -500, 
        behavior: 'smooth' // You can use 'auto' for immediate scroll
    });
});
leftBtn2.addEventListener('click', () => {
    cardsnum2.scrollBy({
        left: -500, 
        behavior: 'smooth' 
    });
});

// Add event listener to the right button
rightBtn.addEventListener('click', () => {
    catebox.scrollBy({
        left: 500, 
        behavior: 'smooth' // You can use 'auto' for immediate scroll
    });
});
rightBtn2.addEventListener('click', () => {
    cardsnum2.scrollBy({
        left: 500, 
        behavior: 'smooth' 
    });
}); 