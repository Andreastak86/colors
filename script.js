const colorBox = document.getElementById('colorBox');
const currentColor = document.getElementById('currentColor');

function changeColor(color, colorName) {
    colorBox.style.backgroundColor = color;
    currentColor.textContent = `Du valgte fargen ${colorName}!`;
}

document.getElementById('redBtn').onclick = () => changeColor('#ff6b6b', 'rød');
document.getElementById('greenBtn').onclick = () => changeColor('#51cf66', 'grønn');
document.getElementById('blueBtn').onclick = () => changeColor('#339af0', 'blå');
document.getElementById('yellowBtn').onclick = () => changeColor('#ffd43b', 'gul');

