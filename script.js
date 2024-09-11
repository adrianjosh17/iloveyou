function popUpBouquet() {
    const bouquet = document.getElementById('bouquet');
    const message = document.getElementById('message');

    // Show the bouquet with animation
    bouquet.style.opacity = '1';
    bouquet.style.transform = 'scale(1)';

    // Show message after a delay
    setTimeout(() => {
        message.style.display = 'block';
    }, 500);
}
