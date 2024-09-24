document.getElementById('btn-donation').addEventListener('click', function (event) {
    event.preventDefault();
    const donationAmount = getInputValueById('donation-amount');
    const totalBalance = getTextValueById('acc-balance');
    const totalDonation = getTextValueById('total-donation');

    if (donationAmount > totalBalance || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Donation Amount');
        return;
    }

    else {
        const newBalance = totalBalance - donationAmount;
        document.getElementById('acc-balance').innerText = newBalance;
        const newTotalDonation = donationAmount + totalDonation;
        document.getElementById('total-donation').innerText = newTotalDonation;
        // history
        const div = document.createElement('div');
        div.classList.add('border-1 border-solid border-gray-100');
        const now = new Date();
        const currentDateTime = now.toLocaleString();
        div.innerHTML = `
            <h4 class = "text-2xl font-bold">${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh</h4>
            <p>${currentDateTime}</p>
            `

        document.getElementById('history-container').appendChild(div);
    }



})

