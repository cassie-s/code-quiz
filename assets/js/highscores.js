const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearHighScoresBtn = document.getElementById("clearHighScoresBtn");

highScoresList.innerHTML = highScores
    .map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join("");

clearHighScoresBtn.addEventListener('click', () =>{
    localStorage.clear();
    highScoresList.innerHTML = ""
});