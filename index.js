var cards = document.querySelectorAll('.card');
console.log(cards);
cards.forEach(function(element) {
  element.addEventListener('click', addReadClass);
});


function addReadClass(e) {
  if (e.target.classList.contains('read')) {
    e.target.classList.remove('read');
  } else {
    e.target.classList.add('read');
  }
}



