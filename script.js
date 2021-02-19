// Connects the button 'verify' to the function 'verifyAge'
document.getElementById('verify').addEventListener('click', verifyAge)

// Creates a variable named age and sets it to 0
let age = 0

function verifyAge () {
  // Gets the age that the user inputs and stores it in the variable 'age' and sets it to an integer
  age = document.getElementById('age').value
  age = parseInt(age)

  // Decides whether the user is old enough to watch certain movies and places them in an age category to tell them what tyoe of movies they can watch alone
  if (age >= 17) {
    document.getElementById('text').innerHTML = 'You can see an R rated movie alone'
  } else if (age >= 13) {
    document.getElementById('text').innerHTML = 'You can see a PG-13 movie alone'
  } else if (age >= 5) {
    document.getElementById('text').innerHTML = 'You can see a G or PG movie alone'
  } else {
    document.getElementById('text').innerHTML = 'Sorry, you are too young to watch most things'
  }
}
