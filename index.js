function  getFirstSelector(selector){
  return document.querySelector(selector);

 }
 function nestedTarget() {
 return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
 var interestedIn = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for (let i = 0, l = interestedIn.length; i < l; i++) {
   interestedIn[i].innerHTML = parseInt(interestedIn[i].innerHTML)+n;
  }
}
