// Load player data

export function loadPlayerData() {
    const profileText = localStorage.getItem('player');
    if (profileText) {
        profile = JSON.parse(profileText);
    }

    // Username, Dist and Rank, Top Level Pokemon (TLP), Number of Pokemon (NoP)
    const nameEl = document.querySelector('#name');
    const distEl = document.querySelector('#distMax');
    const rankEl = document.querySelector('#rank');
    const tlpEl = document.querySelector('#tlp');
    const nopEl = document.querySelector('#nop');

    const nameTxt = profile.userName;
    const distTxt = profile.distMax;
    const tlpTxt = profile.tlp;
    const nopTxt = profile.nop;

    nameEl.textContent = nameTxt;
    rankEl.textContent = calcRank(distTxt);
    distEl.textContent = distTxt;
    tlpEl.textContent = tlpTxt;
    nopEl.textContent = nopTxt;
}

function calcRank(r) {
    if (r >= 1000) return "P*";
    else if (r >= 800) return "A";
    else if (r >= 600) return "B";
    else if (r >= 500) return "C";
    else if (r > 100) return "I";
    else return "N";    
}

loadPlayerData();