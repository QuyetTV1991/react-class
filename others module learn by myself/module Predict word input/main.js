const wordInput = document.querySelector('.input');
const submitBtn = document.querySelector('.submit');
let suggestionList = document.querySelector('.suggestions')

let wordsArr, id

let data = localStorage.getItem("WORDS")
if (data) {
    wordsArr = JSON.parse(data)
    id = wordsArr.length
}
else {
    wordsArr = []
    id = 0
}
// Input new word and check if new word is in wordsArr or not?
// if new word is in wordArr, donot anything, if not, add new word into wordsArr
submitBtn.addEventListener("click", function () {
    let word = wordInput.value
    let wordIndex = wordsArr.findIndex(function (findword) {
        return findword.name.trim().toLowerCase() == word.trim().toLowerCase()
    })
    if (wordIndex == -1) {
        let newWord = {
            name: word,
            wordID: id
        }
        wordsArr.push(newWord)
        id++
        localStorage.setItem("WORDS", JSON.stringify(wordsArr))
        wordInput.value = ''
        wordInput.focus()
    }
    else {
        wordInput.value = ''
        wordInput.focus()
    }
})
// show predict word every input new character, if clear all input, no show any predict
// if user click on any predict, set input field = selected suggest, no show any predict more
wordInput.addEventListener('input', function () {
    let character = wordInput.value
    suggestionList.innerHTML = ''
    let suggestions = wordsArr.filter(function (word) {
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
            wordInput.value = suggest.innerHTML
            wordInput.focus()
            suggestionList.innerHTML = ''
        })
    })
    if (character === '') {
        suggestionList.innerHTML = ''
    }
})