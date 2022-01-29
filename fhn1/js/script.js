// isWebp
function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
}
testWebP(function (support) {
    let className = (support === true) ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
});
// ==========

// defaultText
const setDefaultText = (arr, props) => {
    arr.forEach((item, index) => {
        switch (index) {
            case 0: case 3:
                item[props] = 'час';
                break;
            case 1: case 4:
                item[props] = 'мин';
                break;
            case 2: case 5:
                item[props] = 'сек';
                break;
        }
    });
}

let input = document.querySelectorAll('input[type=number]');
setDefaultText(input, 'placeholder');

let output = document.querySelectorAll('.output');
setDefaultText(output, 'textContent');
// ==========

// timeCalc
document.querySelector('.calc__btn').addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.calc__output').style.visibility = 'visible';

    let hourAir = +document.querySelector('#hour-air').value;
    let minAir = +document.querySelector('#min-air').value;
    let secAir = +document.querySelector('#sec-air').value;
    let hourGround = +document.querySelector('#hour-ground').value;
    let minGround = +document.querySelector('#min-ground').value;
    let secGround = +document.querySelector('#sec-ground').value;

    let resultAir = (hourAir * 3600) + (minAir * 60) + secAir;
    let resultGround = ((hourGround * 3600) + (minGround * 60) + secGround) * 0.2;

    let timestamp = resultAir + resultGround;
    console.log(timestamp);

    let hourFull = Math.floor(timestamp / 60 / 60);
    let minFull = Math.floor(timestamp / 60) - (hourFull * 60);
    let secFull = timestamp % 60;

    document.querySelector('#hour-full').textContent = hourFull;
    document.querySelector('#min-full').textContent = minFull;
    document.querySelector('#sec-full').textContent = secFull;

    let minRound = Math.round(timestamp / 60) - (hourFull * 60);

    if (secFull < 30) {
        document.querySelector('#hour-round').textContent = hourFull;
        document.querySelector('#min-round').textContent = minFull;
    } else {
        if (minRound < 60) {
            document.querySelector('#hour-round').textContent = hourFull;
            document.querySelector('#min-round').textContent = minRound;
        } else {
            document.querySelector('#hour-round').textContent = hourFull + 1;
            document.querySelector('#min-round').textContent = 0;
        }
    }
    document.querySelector('#sec-round').textContent = 0;
});

document.querySelector('.calc__output').style.visibility = 'hidden';