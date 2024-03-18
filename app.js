const changeTextBtn = document.getElementById('changeTextBtn');
const welcomeText = document.querySelector('section p');

changeTextBtn.addEventListener('click', () => {
    welcomeText.textContent = 'Text has been changed!';
});
