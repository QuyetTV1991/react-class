let callButton = document.querySelector('.call');
let markInput = document.querySelector('.mark');
let nameInput = document.querySelector('.name')

callButton.addEventListener('click', function() {
    let name = nameInput.value;
    let mark = markInput.value;
    if (mark < 0 || mark > 10)
    alert('Input Illegal')
    else if (mark < 5)
    alert(name + ' is a weak student')
    else if (mark < 6.5)
    alert(name + ' is an average student')
    else if (mark < 8)
    alert(name + ' is a good student')
    else
    alert(name + 'is an excellent student')
})