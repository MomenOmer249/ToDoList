
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
const templateCard = document.querySelector('.card');
const board = document.querySelector('div.board');

addBtn.addEventListener('click', () => {
    const newCard = templateCard.cloneNode(true);


    newCard.querySelector('.card-title').textContent = '';
    newCard.querySelector('.card-desc').textContent = '';
    newCard.querySelector('.card-check').checked = false;


    newCard.querySelector('.card-date').textContent =
        new Date().toLocaleDateString();

    board.appendChild(newCard);
});


board.addEventListener('click', (e) => {
    const rmvBtn = e.target.closest('.material-symbols-outlined');

    if (rmvBtn) {
        rmvBtn.closest('.card').remove();
    }
});


document.addEventListener('input', (e) => {
    if (e.target.matches('[contenteditable]')) {
        if (e.target.textContent.trim() === '') {
            e.target.innerHTML = '';
        }
    }
});


board.addEventListener('change', (e) => {
    const card = e.target.closest('.card');
    if (e.target.classList.contains('card-check') && e.target.checked) {
        card.querySelector('.card-title').classList.add('completed');
        card.querySelector('.card-desc').classList.add('completed');
    } else {
        card.querySelector('.card-title').classList.remove('completed');
        card.querySelector('.card-desc').classList.remove('completed');
    }

})


board.addEventListener('change', (e) => {
    if (e.target.classList.contains('card-check')) {
        const card = e.target.closest('.card');
        card.classList.toggle('completed', e.target.checked);
    }
});