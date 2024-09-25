function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id) {
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    
    
}

function hideDonationCards() {
    document.getElementById('card-1').classList.add('hidden');
    document.getElementById('card-2').classList.add('hidden');
    document.getElementById('card-3').classList.add('hidden');
}

function showAllDonationCards() {
    document.getElementById('card-1').classList.remove('hidden');
    document.getElementById('card-2').classList.remove('hidden');
    document.getElementById('card-3').classList.remove('hidden');
}
