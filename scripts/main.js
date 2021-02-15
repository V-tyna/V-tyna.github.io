var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src'); 
    if(mySrc === 'images/echeveria.png') {
      myImage.setAttribute('src', 'images/blossom.png');
    } else {
      myImage.setAttribute ('src', 'images/echeveria.png');
    }
} 

// захват ссылок на заголовок и сохранение их в переменные
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// добавление ф-ции для установки персонализированного приветствия ( пока ничего не будет делать)
function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Succulents are cool,' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
var storedName = localStorage.getItem('name');
myHeading.textContent = 'Succulents are cool,' + storedName;
}

// обработчик события onclick
myButton.onclick = function() {
    setUserName();
}

