const submitCta = document.querySelector(".submitCta")
let tipAmount = document.querySelector(".tip-amount");
let totalBillShow = document.querySelector(".totalBillShow");
let showAmountBox = document.querySelector(".result-box")
let showError = document.querySelector(".showError")

submitCta.addEventListener("click",function(e){
    e.preventDefault();


    let billAmount = document.getElementById("billAmount").value;
    let tipPer = document.querySelector("#tipPer").value;

    // 
    let getPercentage = eval(billAmount * (tipPer/100 ))
    let totalBill = eval(+billAmount +  getPercentage)

    // Show Amount Screen 
    if(getPercentage && totalBill ){
        showAmountBox.style.display = "block";
        tipAmount.innerHTML =  "Rs " + getPercentage 
        totalBillShow.innerHTML = "Rs " + totalBill
    }
})



















