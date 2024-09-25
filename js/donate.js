// Noakhali Donation
document.getElementById('btn-donation').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonation('donation-amount', 'total-donation', 'Noakhali Flood Relief');
    
});

// Feni Donation
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonation('donation-amount-feni', 'total-donation-feni', 'Feni Flood Relief');
});

// Quota Movement Donation
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    handleDonation('donation-amount-quota', 'total-donation-quota', 'Quota Movement Aid');
});

// Function to handle donations
function handleDonation(inputId, totalDonationId, causeName) {
    event.preventDefault();
    const donationAmount = getInputValueById(inputId);
    const totalBalance = getTextValueById('acc-balance');
    const totalDonation = getTextValueById(totalDonationId);

    if (donationAmount > totalBalance || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    // Update balance and donation total
    const newBalance = totalBalance - donationAmount;
    document.getElementById('acc-balance').innerText = newBalance;
    const newTotalDonation = donationAmount + totalDonation;
    document.getElementById(totalDonationId).innerText = newTotalDonation;

    // Show confirmation modal
    my_modal_1.showModal();

    // Add to history
    addToHistory(donationAmount, causeName);
}

// Function to add donation history
function addToHistory(donationAmount, causeName) {
    const div = document.createElement('div');
    div.classList.add('border', 'border-solid', 'border-gray-200', 'p-4', 'my-8', 'rounded-xl');
    const now = new Date();
    const currentDateTime = now.toString();
    div.innerHTML = `
        <h4 class="text-xl font-bold">${donationAmount} Taka is Donated for ${causeName}</h4>
        <p class="text-gray-600 pt-4">Date: ${currentDateTime}</p>
    `;
    document.getElementById('history-container').appendChild(div);
}
