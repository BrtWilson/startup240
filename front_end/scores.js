async function loadScores() {
    let scores = [];
    // Get the latest high scores from the service
    const response = await fetch('/api/scores');
    scores = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('scores', JSON.stringify(scores));

    const tableBodyEl = document.querySelector('#scores');

    if (scores.length) {
        for (const [i, score] of scores.entries()) {
            const positionTdEl = document.createElement('td');
            const nameBodyEl = document.createElement('td');
            const rankTdEl = document.createElement('td');
            const distTdEl = document.createElement('td');
            const pokemonTdEl = document.createElement('td');

            positionTdEl.textContent = i + 1;
            nameBodyEl.textContent = score.name;
            rankTdEl.textContent = score.rank;
            distTdEl.textContent = score.dist;
            pokemonTdEl.textContent = score.date;
            
            const rowEl = document.createElement('tr');
            rowEl.appendChild(positionTdEl);
            rowEl.appendChild(nameBodyEl);
            rowEl.appendChild(rankTdEl);
            rowEl.appendChild(distTdEl);
            rowEl.appendChild(pokemonTdEl);
            
            tableBodyEl.appendChild(rowEl);
        }
    }
    else {
        tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
    }
}

loadScores();