const changeTextBtn = document.getElementById('changeTextBtn');
const welcomeText = document.querySelector('section p');

//aaa
changeTextBtn.addEventListener('click', () => {
    welcomeText.textContent = 'Text has been changed!';
});
