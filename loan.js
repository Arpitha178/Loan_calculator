function calculateLoan(){
    var amount=document.getElementById('loanAmount').value;
    var interest=document.getElementById('interestRate').value;
    var tenure=document.getElementById('tenure').value;

    var monthlyRate= interest / 100 / 12;
    var monthlyPay = ( amount * monthlyRate) / ( 1 - Math.pow(1 + monthlyRate, -tenure));
    var totalPay = monthlyPay * tenure;
    var totalInterest = totalPay - amount;

    document.getElementById('monthlyPay').innerHTML=`EMI : Rs` + monthlyPay.toFixed(2);
    document.getElementById('totalPay').innerHTML=`Total Pay :` + totalPay.toFixed(2);
    document.getElementById('totalInterest').innerHTML=`Total Interest` + totalInterest.toFixed(2);

}
function reset(){
    document.getElementById('loanAmount').value = ""
    document.getElementById('interestRate').value = ""
    document.getElementById('tenure').value = ""
    document.getElementById('monthlyPay').innerHTML = ""
    document.getElementById('totalPay').innerHTML = ""
    document.getElementById('totalInterest').innerHTML = ""
}