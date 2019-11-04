const expenseInput = document.querySelector('#expense');
const submitBtn = document.querySelector('.addBtn');
let suggestionList = document.querySelector('.suggestions')

let expenseArr, id

let expenseData = localStorage.getItem("EXPENSEWORDS")
if (expenseData) {
    expenseArr = JSON.parse(expenseData)
    id = expenseArr.length
}
else {
    expenseArr = []
    id = 0
}
// Input new word and check if new word is in expenseArr or not?
function checkExpenseIndexInExpenseArr(word) {
    let wordIndex = expenseArr.findIndex(function (findword) {
        return findword.name.trim().toLowerCase() == word.trim().toLowerCase()
    })
    return wordIndex
}
// show predict word every input new character, if clear all input, no show any predict
// if user click on any predict, set input field = selected suggest, no show any predict more
expenseInput.addEventListener('input', function () {
    let character = expenseInput.value
    suggestionList.innerHTML = ''
    let suggestions = expenseArr.filter(function (word) {
        return word.name.toLowerCase().startsWith(character)
    })
    suggestions.forEach(function (suggested) {
        let div = document.createElement("div")
        div.classList.add('suggest')
        div.innerHTML = suggested.name
        suggestionList.appendChild(div)
    })
    let suggesteds = document.querySelectorAll('.suggest')
    suggesteds.forEach(function (suggest) {
        suggest.addEventListener('click', function () {
            expenseInput.value = suggest.innerHTML
            expenseInput.focus()
            suggestionList.innerHTML = ''
        })
    })
    if (character === '') {
        suggestionList.innerHTML = ''
    }
})