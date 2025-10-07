const toggleButton = document.querySelector('.toggle');
const navigation = document.querySelector('.nav');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navigation.classList.toggle('active');
});