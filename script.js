let bill = document.getElementById("bill");
let people = document.querySelector("#people");
let select = document.querySelectorAll(".select button");
let custom = document.getElementById("custom");
let BillInput = 0;
let perPerson = 0;
let selectedTip = 0;
let custominput = 0;
bill.addEventListener("input", validateBill);
people.addEventListener("input", validate);
select.forEach((btn) =>
  btn.addEventListener("click", function selected() {
    selectedTip = Number(btn.value);
    if (BillInput && perPerson && selectedTip) {
      calculateTips();
    } else {
      displayerr();
      setTimeout(removeErr, 2000);
    }
  })
);

function validateBill() {
  if (bill.value < 1 || isNaN(bill.value)) {
    bill.classList.add("error");
    return;
  } else {
    BillInput = Number(bill.value);
    bill.classList.remove("error");
  }
}

function validate() {
  if (people.value < 1) {
    people.classList.add("error");

    return;
  } else {
    perPerson = Number(people.value);
    people.classList.remove("error");
  }
}
custom.addEventListener("input", function () {
  custominput = Number(custom.value);
  if (BillInput && perPerson && custominput) {
    selectedTip = custominput / 100;
    calculateTips();
    console.log(selectedTip);
  } else {
    displayerr();
    setTimeout(removeErr, 1000);
  }
});
function calculateTips() {
  let tipAmnt = (BillInput * selectedTip) / perPerson / 100;
  let Total = BillInput / perPerson + tipAmnt;
  document.querySelector(".tip span").innerHTML = tipAmnt.toFixed(2);
  document.querySelector(".total span").innerHTML = Total.toFixed(2);
}

function Reset() {
  document.querySelector(".tip span").innerHTML = "0.00";
  document.querySelector(".total span").innerHTML = "0.00";
  bill.value = "";
  people.value = "";
  selectedTip = "";
  custom.value = "";
}

function displayerr() {
  if (!bill.value) {
    let small = document.querySelector(".bill small");
    small.style.display = "block";
  } else {
    if (!people.value) {
      let small = document.querySelector(".people small");
      small.style.display = "block";
    }
  }
}

function removeErr() {
  let rm = document.querySelector(".bill small");
  rm.style.display = "none";
  let pm = document.querySelector(".people small");
  pm.style.display = "none";
}

let clear = document.querySelector("aside button");
clear.addEventListener("click", Reset);
