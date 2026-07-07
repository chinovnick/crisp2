let clickCount = 0;

const btn = document.getElementById('loadBtn');
const apear = document.getElementById('loadmore67');

btn.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        apear.style.display = 'block';
    } else if (clickCount === 2) {
        apear.style.display = 'none';
        clickCount = 0;
    }

}); 