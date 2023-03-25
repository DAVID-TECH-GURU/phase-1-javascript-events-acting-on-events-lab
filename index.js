//moveDodgerLeft()

let dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    document.addEventListener('keydown', function(event) {
      console.log(event.key);
    });
  }

  function moveDodgerLeft() {
    document.addEventListener('keydown', function(event) {
      if (event.key === "ArrowLeft") {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
  
        dodger.style.left = `${left - 1}px`;
      }
    });
  }

  moveDodgerLeft();



  //moveDodgerRight()

  function moveDodgerRight() {
    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 39) {
        let leftNumbers = dodger.style.left.replace('px', '');
        let left = parseInt(leftNumbers, 10);
  
        if (left < 360) {
          dodger.style.left = `${left + 5}px`;
        }
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });






  //final code

  constdodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


//my test trial code for the lab

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  