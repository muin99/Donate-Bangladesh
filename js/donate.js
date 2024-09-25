document.getElementById('btn-donation').addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount = getInputValueById('donation-amount');
    const totalBalance = getTextValueById('acc-balance');
    const totalDonation = getTextValueById('total-donation');

    if (donationAmount > totalBalance || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    const newBalance = totalBalance - donationAmount;
    document.getElementById('acc-balance').innerText = newBalance;
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById('total-donation').innerText = newTotalDonation;
    my_modal_1.showModal();

    // history
    const div = document.createElement('div');
    div.classList.add('border', 'border-solid', 'border-gray-200', 'p-4', 'my-8', 'rounded-xl');
    const now = new Date();
    const currentDateTime = now.toString();
    div.innerHTML = `
        <h4 class="text-xl font-bold">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
        <p class= "text-gray-600 pt-4">Date: ${currentDateTime}</p>
    `;

    document.getElementById('history-section').appendChild(div);
});

