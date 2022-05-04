const input = document.querySelector("#billsValue");
const billInput = document.querySelector("#billInput");
const percentage = document.querySelectorAll(".item");
const numOfPeople = document.querySelector("#numOfPeople");
const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total");
const form = document.querySelector("#form-input");
const custom = document.querySelector(".pickPercent");
const customInput = document.querySelector(".item6");
const reset = document.querySelector(".btn");
const warning = document.querySelector(".errorMsg");
let billPercent = 0;
let customValue = 0;
// function to display error
const errorMsg = (Event) => {
  if (Event.target.value == 0) {
    numOfPeople.classList.add("errorborder");
    warning.style.display = "block";
  } else {
    numOfPeople.classList.remove("errorborder");
    warning.style.display = "none";
  }
};
// adding eventlistener to the bill input
billInput.addEventListener("keyup", errorMsg);
// adding click background to the percentages
percentage.forEach((percent) => {
  percent.addEventListener("click", () => {
    for (let each of percentage) {
      if (each.classList.contains("back")) {
        each.classList.remove("back");
        customInput.value = 0;
      }
    }

    percent.classList.add("back");
    billPercent = percent.innerHTML;
  });
});
// custom eventlistener
custom.addEventListener("keyup", () => {
  if (customInput.contains('back')) {
    customInput.remove('back')
  }
  billPercent = customInput.value;
});
// number of people eventlistener
form.addEventListener("keyup", () => {
  if (billPercent.includes("%")) {
    let tipSplit =
      ((billPercent.replace("%", "") / 100) * input.value) / numOfPeople.value;
    let billSplit =
      (Number(input.value) +
        Number((billPercent.replace("%", "") / 100) * input.value)) /
      numOfPeople.value;
    tip.innerHTML = tipSplit.toFixed(2);
    total.innerHTML = billSplit.toFixed(2);
  } else if (!billPercent.includes("%")) {
    let tipSplit = Number(billPercent) / numOfPeople.value;
    let billSplit =  (Number(input.value) + Number(billPercent)) / numOfPeople.value;
    tip.innerHTML = tipSplit.toFixed(2);
    total.innerHTML = billSplit.toFixed(2);
  }
});
// eventlistener to reset
reset.addEventListener("click", () => {
  input.value = 0;
  numOfPeople.value = 0;
  customInput.value = 0;
  let num = 0;
  tip.innerHTML = num.toFixed(2);
  total.innerHTML = num.toFixed(2);
});
