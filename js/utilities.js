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
    document.getElementById('card-container').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');

}
