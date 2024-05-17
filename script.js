window.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.nobutton');
    const yesButton = document.getElementById('yes');

    // Position the "Нет" button near the "Да" button
    const yesButtonRect = yesButton.getBoundingClientRect();
    noButton.style.left = (yesButtonRect.right + 10) + 'px'; // 10px to the right of the "Да" button
    noButton.style.top = yesButtonRect.top + 'px';

    function getMaxDimensions() {
        const buttonHeight = noButton.offsetHeight;
        const buttonWidth = noButton.offsetWidth;
        const maxWidth = window.innerWidth - buttonWidth;
        const maxHeight = window.innerHeight - buttonHeight;
        return { maxWidth, maxHeight };
    }

    noButton.addEventListener('click', () => {
        alert("Я не буду с тобой дружить, 🙁");
    });

    noButton.addEventListener('mouseover', () => {
        const { maxWidth, maxHeight } = getMaxDimensions();
        noButton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        noButton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });

    yesButton.addEventListener('click', () => {
        window.location.href = 'page.html';
    });

    // Adjust button positions on window resize
    window.addEventListener('resize', () => {
        const { maxWidth, maxHeight } = getMaxDimensions();
        noButton.style.left = Math.min(parseInt(noButton.style.left), maxWidth) + 'px';
        noButton.style.top = Math.min(parseInt(noButton.style.top), maxHeight) + 'px';
    });
});
