
document.querySelectorAll('[contenteditable]').forEach(el => {
    el.addEventListener('input', () => {
        if (el.textContent.trim() === '') {
            el.innerHTML = '';
        }
    });
});

const title = document.querySelector('.card-title');
const desc = document.querySelector('.card-desc');

title.addEventListener('beforeinput', (e) => {
    const limit = 20;

    if (
        title.textContent.length >= limit &&
        e.inputType.startsWith('insert')
    ) {
        e.preventDefault();
    }
});

desc.addEventListener('beforeinput', (e) => {
    const limit = 150;  

    if (
        desc.textContent.length >= limit &&
        e.inputType.startsWith('insert')
    ) {
        e.preventDefault();
    }
});

const addBtn = document.getElementById('addBtn');
const board = document.querySelector('div.board');
const templateCard = document.querySelector('.card');

// Add new card
addBtn.addEventListener('click', () => {
    const newCard = templateCard.cloneNode(true);

    // Clear contents
    newCard.querySelector('.card-title').textContent = '';
    newCard.querySelector('.card-desc').textContent = '';
    newCard.querySelector('.card-check').checked = false;


    newCard.querySelector('.card-date').textContent =
        new Date().toLocaleDateString();

    board.appendChild(newCard);
});

// Delete card when checkbox is checked
board.addEventListener('change', (e) => {
    if (e.target.classList.contains('card-check') && e.target.checked) {
        e.target.closest('.card').remove();
    }
});


document.addEventListener('input', (e) => {
    if (e.target.matches('[contenteditable]')) {
        if (e.target.textContent.trim() === '') {
            e.target.innerHTML = '';
        }
    }
});