// This allows the user to chose any number
let number = 0

// This button allows users to find the area of a square from an integer of their choosing
document.getElementById('button').addEventListener('click', multiplication)

// When users click this button, the integer will mutiply itself and an alert wil appear stating the answer
function multiplication() {
  number = document.getElementById('input').value
  number = parseInt(number)
  number = number * number
  alert(number)
}
