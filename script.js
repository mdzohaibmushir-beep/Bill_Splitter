document.getElementById("calculate-btn").addEventListener("click", calculateBill);

function calculateBill() {
    const billAmount = parseFloat(document.getElementById("bill-amount").value);
    const peopleCount = parseInt(document.getElementById("people-count").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    if (isNaN(billAmount) || isNaN(peopleCount) || peopleCount <= 0) {
        alert("Please enter valid numbers");
        return;
    }

    let tipAmount = billAmount * (tipPercentage / 100 || 0);
    let totalAmount = billAmount + tipAmount;
    let perPerson = totalAmount / peopleCount;

    document.getElementById("per-person").textContent = `Each Person Pays: ₹${perPerson.toFixed(2)}`;
    document.getElementById("total-with-tip").textContent = `Total with Tip: ₹${totalAmount.toFixed(2)}`;
}
