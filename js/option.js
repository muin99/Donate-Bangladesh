const btnDonate = document.getElementById('btn-donate');
const btnHistory = document.getElementById('btn-history');

document.getElementById('btn-history').addEventListener('click', function () {
    showSectionById('history-section');

    btnDonate.classList.remove('bg-green-400');
    btnHistory.classList.add('bg-green-400');
    
    
})
document.getElementById('btn-donate').addEventListener('click', function () {
    showSectionById('card-container');
    btnDonate.classList.add('bg-green-400')
    btnHistory.classList.remove('bg-green-400')
})