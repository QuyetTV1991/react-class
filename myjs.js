let callButton = document.querySelector('.call')
let markMathInput = document.querySelector('.markMath')
let markSienceInput = document.querySelector('.markSience')
let markLiteratureInput = document.querySelector('.markLiterature')
let nameInput = document.querySelector('.name')

callButton.addEventListener('click', function() {
    let name = nameInput.value
    let math = markMathInput.value
    let sience = markSienceInput.value
    let literature = markLiteratureInput.value
    let markAverage = ((math + sience + literature) / 3)
    if (math < 0 || sience < 0 || literature < 0 || math > 10 || sience > 10 || literature > 10)
    alert('Input Illegal')
    else if (markAverage < 5)
    alert(name + ' is a weak student')
    else if (markAverage < 6.5)
    alert(name + ' is an average student')
    else if (markAverage < 8)
    alert(name + ' is a good student')
    else
    alert(name + ' is an excellent student')
})