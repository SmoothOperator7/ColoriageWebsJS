let selectedColor = null;

document.querySelectorAll('.color').forEach(color => {
    color.addEventListener('click', () => {
        selectedColor = color.getAttribute('data-color');
        document.querySelectorAll('.color').forEach(c => c.style.border = '2px solid #000');
        color.style.border = '4px solid #000';
    });
});

document.querySelectorAll('#coloring-book rect').forEach(rect => {
    rect.addEventListener('click', () => {
        if (selectedColor) {
            rect.style.fill = selectedColor;
        }
    });
});