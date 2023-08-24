const buyButton = document.getElementById('buyButton');
const alertCard = document.getElementById('alertCard');
const alertMessage = document.getElementById('alertMessage');

buyButton.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
    showAlert('¡Comprado!');
});

function showAlert(message) {
    alertMessage.textContent = message;
    alertCard.style.display = 'block';

    setTimeout(() => {
        alertCard.style.display = 'none';
        document.body.style.backgroundColor = 'white';
    }, 5000);
}
