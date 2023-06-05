// Home Buttons
const addOneBtn = document.getElementById("add_1");
const addTwoBtn = document.getElementById("add_2");
const addThreeBtn = document.getElementById("add_3");

// Guest Buttons
const guestOneBtn = document.getElementById("guest_1");
const guestTwoBtn = document.getElementById("guest_2");
const guestThreeBtn = document.getElementById("guest_3");

// Score Buttons
const scoreHomeBtn = document.getElementsByClassName("flex_btn")[0];
const scoreGuestBtn = document.getElementsByClassName("flex_btn")[1];

// Render scores for both players
let displayHomeScore = document.querySelector(".display_home_score");
let displayGuestScore = document.querySelector(".display_guest_score");

// Reset Button
const resetButton = document.getElementById("reset-timer");

// Display Timer
const displayElement = document.getElementById("timer-display");

// Display Finished Game
const endTime = document.getElementById("time_end");

let interval; // Store the interval ID to clear it later

// Setup scores
let scoreHome = 0;
let scoreGuest = 0;
let timerDuration = 10;

// Display the score when the button is clicked
addOneBtn.addEventListener("click", () => {
  scoreHome += 1;
  displayHomeScore.textContent = scoreHome;
  highlightHighestScore();
});

addTwoBtn.addEventListener("click", () => {
  scoreHome += 2;
  displayHomeScore.textContent = scoreHome;
  highlightHighestScore();
});

addThreeBtn.addEventListener("click", () => {
  scoreHome += 3;
  displayHomeScore.textContent = scoreHome;
  highlightHighestScore();
});

guestOneBtn.addEventListener("click", () => {
  scoreGuest += 1;
  displayGuestScore.textContent = scoreGuest;
  highlightHighestScore();
});

guestTwoBtn.addEventListener("click", () => {
  scoreGuest += 2;
  displayGuestScore.textContent = scoreGuest;
  highlightHighestScore();
});

guestThreeBtn.addEventListener("click", () => {
  scoreGuest += 3;
  displayGuestScore.textContent = scoreGuest;
  highlightHighestScore();
});

function startTimer(duration, displayElement) {
  let timer = duration;
  let minutes, seconds;

  // Function to update the timer display
  function updateDisplay() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayElement.textContent = minutes + ":" + seconds;
  }

  // Start the time interval
  interval = setInterval(() => {
    updateDisplay();

    if (--timer < 0) {
      clearInterval(interval);
      // Perform any action when the timer reaches 120
      endTime.style.display = "block";
      displayElement.style.display = "none";
      scoreHomeBtn.style.display = "none";
      scoreGuestBtn.style.display = "none";
    }
  }, 1000);
}

function resetTimer(duration, displayElement) {
  clearInterval(interval); // Clear the current interval
  displayElement.textContent = formatTime(duration); // Reset the display
}

function formatTime(duration) {
  const minutes = parseInt(duration / 60, 10);
  const seconds = parseInt(duration % 60, 10);
  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}

// Start the timer
startTimer(timerDuration, displayElement);

// Reset function
resetButton.addEventListener("click", () => {
  scoreHome = 0;
  scoreGuest = 0;

  displayHomeScore.innerHTML = scoreHome;
  displayGuestScore.innerHTML = scoreGuest;
  displayElement.style.display = "block";
  endTime.style.display = "none";
  displayHomeScore.style.color = "rgba(229, 255, 0, 0.815)";
  displayGuestScore.style.color = "rgba(229, 255, 0, 0.815)";

  scoreHomeBtn.style.display = "block";
  scoreGuestBtn.style.display = "block";

  resetTimer(timerDuration, displayElement),
    startTimer(timerDuration, displayElement);
});

// Highlight the highest score
function highlightHighestScore() {
  if (scoreHome > scoreGuest) {
    displayHomeScore.style.color = "rgb(255, 0, 55)";
    displayGuestScore.style.color = "rgba(229, 255, 0, 0.815)";
  } else if (scoreHome < scoreGuest) {
    displayHomeScore.style.color = "rgba(229, 255, 0, 0.815)";
    displayGuestScore.style.color = "rgb(255, 0, 55)";
  } else {
    displayHomeScore.style.color = "rgba(229, 255, 0, 0.815)";
    displayGuestScore.style.color = "rgba(229, 255, 0, 0.815)";
  }
}
