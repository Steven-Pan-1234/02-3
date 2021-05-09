document.getElementById('button').addEventListener('click', cn)
let number = 0
function cn () {
  number = document.getElementById('input').value
  number = parseInt(number)
  if (number < 0) { document.getElementById('p').innerHTML = "negative" } else { document.getElementById('p').innerHTML = "positive" }
}