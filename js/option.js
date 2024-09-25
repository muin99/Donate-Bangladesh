const btnDonate = document.getElementById('btn-donate');
const btnHistory = document.getElementById('btn-history');

document.getElementById('btn-history').addEventListener('click', function () {
    showSectionById('history-section');
    hideDonationCards();
    btnDonate.classList.remove('bg-green-400');
    btnDonate.classList.add('bg-transparent');
    btnHistory.classList.add('bg-green-400');
    btnHistory.classList.remove('bg-transparent', 'border-gray-300');
    
});

document.getElementById('btn-donate').addEventListener('click', function () {
    showAllDonationCards();
    showSectionById('card-1');
    showSectionById('card-2');
    showSectionById('card-3');
    btnDonate.classList.add('bg-green-400');
    btnHistory.classList.remove('bg-green-400');
    btnHistory.classList.add('bg-transparent');
    btnDonate.classList.remove('bg-transparent');
    

});

