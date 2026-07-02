// Match Variables
let runs = 0;
let wickets = 0;
let balls = 0;

let innings = 1;
let target = 0;

// Team Selection
const teamA = document.getElementById("teamA");
const teamB = document.getElementById("teamB");

const battingTeam = document.getElementById("battingTeam");

const score = document.getElementById("score");
const overs = document.getElementById("overs");
const runRate = document.getElementById("runRate");
const targetText = document.getElementById("target");
const lastBall = document.getElementById("lastBall");
const winner = document.getElementById("winner");

// Buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const six = document.getElementById("six");
const dot = document.getElementById("dot");
const wide = document.getElementById("wide");
const noBall = document.getElementById("noBall");
const wicket = document.getElementById("wicket");
const inningsBtn = document.getElementById("innings");
const reset = document.getElementById("reset");

// Update Scoreboard
function updateScoreboard() {

    score.innerText = `${runs} / ${wickets}`;

    let over = Math.floor(balls / 6);
    let ball = balls % 6;

    overs.innerText = `Overs : ${over}.${ball}`;

    let completedOvers = balls / 6;

    let crr = completedOvers > 0
        ? (runs / completedOvers).toFixed(2)
        : "0.00";

    runRate.innerText = `Current Run Rate : ${crr}`;

    battingTeam.innerText =
        "Batting : " +
        (innings === 1 ? teamA.value : teamB.value);

    targetText.innerText =
        innings === 1
            ? "Target : --"
            : "Target : " + target;
}

// Change Team Names
teamA.addEventListener("change", updateScoreboard);
teamB.addEventListener("change", updateScoreboard);

// Initial Load
updateScoreboard();
// +1 Run
one.addEventListener("click", function () {
    runs += 1;
    balls++;
    lastBall.innerText = "Last Ball : 1 Run";
    updateScoreboard();
});

// +2 Runs
two.addEventListener("click", function () {
    runs += 2;
    balls++;
    lastBall.innerText = "Last Ball : 2 Runs";
    updateScoreboard();
});

// +3 Runs
three.addEventListener("click", function () {
    runs += 3;
    balls++;
    lastBall.innerText = "Last Ball : 3 Runs";
    updateScoreboard();
});

// FOUR
four.addEventListener("click", function () {
    runs += 4;
    balls++;
    lastBall.innerText = "Last Ball : FOUR";
    updateScoreboard();
});

// SIX
six.addEventListener("click", function () {
    runs += 6;
    balls++;
    lastBall.innerText = "Last Ball : SIX";
    updateScoreboard();
});

// DOT BALL
dot.addEventListener("click", function () {
    balls++;
    lastBall.innerText = "Last Ball : DOT";
    updateScoreboard();
});

// WIDE
wide.addEventListener("click", function () {
    runs += 1;
    lastBall.innerText = "Last Ball : WIDE";
    updateScoreboard();
});

// NO BALL
noBall.addEventListener("click", function () {
    runs += 1;
    lastBall.innerText = "Last Ball : NO BALL";
    updateScoreboard();
});

// WICKET
wicket.addEventListener("click", function () {

    if (wickets < 10) {
        wickets++;
        balls++;
        lastBall.innerText = "Last Ball : WICKET";
    }

    updateScoreboard();
});
inningsBtn.addEventListener("click", function () {

    if (innings === 1) {

        // Set target for Team 2
        target = runs + 1;

        // Start second innings
        innings = 2;

        // Reset score for Team 2
        runs = 0;
        wickets = 0;
        balls = 0;

        lastBall.innerText = "Last Ball : --";
        winner.innerText = "Winner : --";

        updateScoreboard();

        alert("Second Innings Started!\nTarget: " + target);

    } else {

        // Match Result
        if (runs >= target) {

            winner.innerText = "Winner : " + teamB.value;

        } else if (runs === target - 1) {

            winner.innerText = "Match Tied";

        } else {

            winner.innerText = "Winner : " + teamA.value;

        }

    }

});
reset.addEventListener("click", function () {

    runs = 0;
    wickets = 0;
    balls = 0;

    innings = 1;
    target = 0;

    score.innerText = "0 / 0";
    overs.innerText = "Overs : 0.0";
    runRate.innerText = "Current Run Rate : 0.00";

    battingTeam.innerText = "Batting : " + teamA.value;

    targetText.innerText = "Target : --";

    lastBall.innerText = "Last Ball : --";

    winner.innerText = "Winner : --";

    updateScoreboard();

});