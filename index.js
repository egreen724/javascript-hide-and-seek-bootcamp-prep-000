function getFirstSelector(selector) {
  return document.querySelector(selector)
} 

function nestedTarget() {
  return document.querySelector('#nested.target')
}

function increaseRankBy(n) {
  var listString = document.querySelectorAll("ul.ranked-list li");
  
  for (let i = 0; i < listString.length; i++) {
    listString[i].innerHTML = ((parseInt(listString[i].innerHTML)) + n)
  }
}

function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}