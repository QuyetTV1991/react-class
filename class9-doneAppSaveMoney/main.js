const appState = {
  budget: 5000000,
  budgetRemain: 5000000,
  expenses: [],
  id: 0
};
// -------------------
let data = localStorage.getItem("EXPENSES");
if (data) {
  appState.expenses = JSON.parse(data);
  appState.budgetRemain = calculateBudgetRemain(appState);
  id = appState.expenses.length;
  renderHTML(appState);
} else {
  appState.expenses = [];
  id = 0;
  renderHTML(appState);
}
//-----------------------
function renderHTML(state) {
  let bodyEle = document.querySelector("body");
  let template = `
    <header>APLICATION</header>
        <div class="container">
        ${renderHeader(appState)}
        ${renderForm(appState)}
        ${renderExpenses(appState)}
        </div>
    `;
  bodyEle.innerHTML = template;
  bindEvent();
}
// -----------------
function renderHeader(state) {
  return `
    <div class="header">
        <div class="budget">
            <span>BUDGET: </span>
            <span>${formatCurrency(state.budget)} VND</span>
        </div>
        <div class="time">
          <span>${calendarToday()}</span>
          <span class="showTime"></span>
        </div>
        <div class="budget-remain ${appState.budgetRemain <= 0 ? "red" : ""}">
            <span>BUDGET REMAIN: </span>
            <span>${formatCurrency(state.budgetRemain)} VND </span>
        </div>
    </div> 
`;
}
// --------------------
function renderForm(state) {
  return `
    <form action="/action_page.php" autocomplete="off">
        <label for="expense">Expense</label>
        <input type="text" id="expense" name="" placeholder="Input..." />
        <div class="suggestions"></div>
        <label for="amount">Amount</label>
        <input
        type="text"
        id="amount"
        name="currency-field"
        placeholder="How much..."
        />
        <label for="type-of-expense">Type Of Expense</label>
        <select name="type-of-expense" id="type-of-expense">
            <option value="spendMoney">Spend Money</option>
            <option value="incomeMoney">Income Money</option>
        </select>
        ${
    state.budgetRemain <= 0
      ? '<button class="addBtn disable">Add</button>'
      : '<button class="addBtn">Add</button>'
    }
        ${
    state.budgetRemain <= 0
      ? '<p class="inform">Out of budget, cannot add anymore!!</p>'
      : ""
    }
    </form>
`;
}
// ------------------
function renderExpenses(state) {
  let listExpense = state.expenses
    .map(function (item) {
      return `
            <li data-id="${item.expenseID}">
                <span>${item.name} : ${formatCurrency(item.amount)} VND</span>
                ${
        item.expenseType == "spendMoney"
          ? '<span class="red">&#8595</span>'
          : '<span class="green">&#8593</span>'
        }
                <span>${formatTime_HourMinuteSession(
          item.stampTimeExpense
        )}</span>
                <span class="delete" delete-id="${item.expenseID}">X</span>
            </li>
        `;
    })
    .join("");
  return `
    <div class="content">
        <ul class="list-content">
            ${listExpense}
        </ul>
        <button class="clearAll">
        <i class="fas fa-sync-alt"></i>
        </button>
    </div>
`;
}
// -------------------------
function bindEvent() {
  // ------------
  document.querySelector("#amount").addEventListener("input", function () {
    let amountInput = Number(
      document
        .querySelector("#amount")
        .value.split(",")
        .join("")
    );
    if (invalidAmountInput(amountInput)) {
      alert("Invalid Input Amount, must be positive Amount");
      return;
    }
    document.querySelector("#amount").value = formatCurrency(amountInput);
  });
  // ----------------
  document.querySelector(".addBtn").addEventListener("click", function (event) {
    event.preventDefault();
    let expenseInput = document.querySelector("#expense").value;
    let amountInput = Number(
      document
        .querySelector("#amount")
        .value.split(",")
        .join("")
    );
    let typeOfExpenseSelected = document.querySelector("#type-of-expense")
      .value;
    // if Text input (Expenseinput) TRUE cannot add
    if (invalidExpenseInput(expenseInput)) {
      alert("cannot empty Expense Input");
      return;
    }
    if (typeOfExpenseSelected == "spendMoney") {
      amountInput = 0 - amountInput;
    }
    // if notEnoughMoney is TRUE from budgerRemain, cannot add and pop up alert
    if (notEnoughBudget(amountInput)) {
      alert("not enough money to your expense");
      return;
    }
    let newExpense = {
      expenseID: id,
      name: expenseInput,
      amount: amountInput,
      expenseType: typeOfExpenseSelected,
      stampTimeExpense: calculateTimeStamp()
    };
    appState.expenses.push(newExpense);
    appState.budgetRemain = calculateBudgetRemain(appState);
    localStorage.setItem("EXPENSES", JSON.stringify(appState.expenses));
    if (checkExpenseIndexInExpenseArr(expenseInput) == -1) {
      let newExpenseWord = {
        name: expenseInput,
        wordID: id
      }
      expenseArr.push(newExpenseWord)
      localStorage.setItem("EXPENSEWORDS", JSON.stringify(expenseArr))
    }
    id++;
    renderHTML(appState);
    setFocustoTextBox();
  });
  // ------------
  document.querySelector(".clearAll").addEventListener("click", function () {
    localStorage.clear();
    location.reload();
  });
  // -------------
  document.querySelectorAll(".delete").forEach(function (expense) {
    expense.addEventListener("click", function () {
      let selectedItemID = expense.getAttribute("delete-id");
      let expenseSelectedIndex = appState.expenses.findIndex(function (item) {
        return item.expenseID == selectedItemID;
      });
      appState.expenses.splice(expenseSelectedIndex, 1);
      renderHTML(appState);
      localStorage.setItem("EXPENSES", JSON.stringify(appState.expenses));
      location.reload();
    });
  });
}
// --------------------------
function calculateBudgetRemain(state) {
  let totalExpenses = state.expenses.reduce(function (sum, item) {
    return (sum = sum + item.amount);
  }, 0);
  return state.budget + totalExpenses;
}
function calendarToday() {
  let dateArr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let monthArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let today = new Date();
  let day = dateArr[today.getDay() - 1];
  let date = today.getDate();
  let month = monthArr[today.getMonth()];
  let year = today.getFullYear();
  return `${day} ${date} - ${month} - ${year}`;
}
function showTime() {
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let session = "AM";
  if (h == 0) h = 12;
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.querySelector(
    ".showTime"
  ).innerHTML = `${h} : ${m} : ${s} ${session}`;
  setTimeout(showTime, 1000);
}
showTime();
function calculateTimeStamp() {
  return new Date().getTime();
}
function formatTime_HourMinuteSession(timeStamp) {
  let time = new Date(timeStamp);
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  let session = "AM";
  if (h == 0) h = 12;
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  return `${h} : ${m} : ${s} ${session}`;
}
function formatCurrency(numberInput, location) {
  let reverseNumberInputArr = numberInput
    .toString()
    .split("")
    .reverse();
  let reverseNewNumberStr = "";
  reverseNumberInputArr.forEach(function (item, index) {
    reverseNewNumberStr = reverseNewNumberStr + item;
    if ((index + 1) % 3 === 0) {
      reverseNewNumberStr = reverseNewNumberStr + ",";
    }
  });
  let newNumberReverseArr = reverseNewNumberStr.split("");
  if (newNumberReverseArr[newNumberReverseArr.length - 1] === "-") {
    if (newNumberReverseArr[newNumberReverseArr.length - 2] === ",") {
      newNumberReverseArr.splice(newNumberReverseArr.length - 2, 1);
    }
  } else if (newNumberReverseArr[newNumberReverseArr.length - 1] === ",") {
    newNumberReverseArr.pop();
  }
  return newNumberReverseArr.reverse().join("");
}
function invalidExpenseInput(value) {
  return value.trim() === "";
}
function invalidAmountInput(value) {
  return isNaN(value) === true;
}
function notEnoughBudget(value) {
  return appState.budgetRemain + value <= 0;
}
function setFocustoTextBox() {
  document.querySelector("#expense").focus();
}
