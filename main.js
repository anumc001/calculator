const investedAmountInput = document.querySelector(".invested-amount");
const gainRateInput = document.querySelector(".gain-rate");
const investmentPeriodInput = document.querySelector(".investment-period");

const investedAmountValue = document.querySelector(".inv-amount .value");
const estimatedReturnsValue = document.querySelector(".est-returns .value");
const totalAmountValue  = document.querySelector("total-value .value");

const calculateBtn = document.querySelector(".calculate-btn");
 

let investedAmount = parseFloat(investedAmountInput.value);
let gainRate = parseFloat(gainRateInput.value);
let investmentPeriod = parseFloat(investmentPeriodInput.value);


let days = investmentPeriod * 25;

const calculateReturns = () => {
    let returns = investedAmount * (Math.pow((1 + gainRate / 100), days));
    return returns;
};

const updateData = (returns) => {
    investedAmountValue.innerHTML = Math.round(investedAmount);
    estimatedReturnsValue.innerHTML = Math.round(returns)
    let totalAmount = Math.round(investedAmount + returns);
    totalAmountValue.innerHTML = totalAmount;
};

const init = () => {
    let returns = calculateReturns();
    updateData(returns);
};

init();
