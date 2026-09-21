const modeSelect = document.getElementById("modes");
const numberSelect = document.getElementById("numberSelect");
const lastNameInput = document.getElementById("lastNameInput");
const nicknameInput = document.getElementById("nicknameInput");
const searchBtn = document.getElementById("Search");

// Populate numbers 1–98
for (let i = 1; i <= 99; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    numberSelect.appendChild(option);
}

modeSelect.addEventListener("change", function () {
    const mode = modeSelect.value;

    // Reset values when mode changes
    numberSelect.selectedIndex = 0;
    lastNameInput.value = "";
    nicknameInput.value = "";
    resultDiv.innerHTML = "";


    // Hide everything first
    numberSelect.style.display = "none";
    lastNameInput.style.display = "none";
    nicknameInput.style.display = "none";
    searchBtn.style.display = "none";   // hide button by default

    // Show the correct input + show the button
    if (mode === "Numbers") {
        numberSelect.style.display = "block";
        searchBtn.style.display = "block";
    } 
    else if (mode === "Last Names") {
        lastNameInput.style.display = "block";
        searchBtn.style.display = "block";
    } 
    else if (mode === "Nicknames") {
        nicknameInput.style.display = "block";
        searchBtn.style.display = "block";
    }
});

const resultDiv = document.getElementById("result");
searchBtn.addEventListener("click", searchPlayer);


function searchPlayer() {
    const mode = modeSelect.value;
    let foundPlayer = null;

    if (mode === "Numbers") {
        const selectedNumber = parseInt(numberSelect.value);
        foundPlayer = players.find(p => p.number === selectedNumber);
    } 
    else if (mode === "Last Names") {
        const lastName = lastNameInput.value.trim().toLowerCase();
        foundPlayer = players.find(
            p => p.lastName.toLowerCase() === lastName
        );
    } 
    else if (mode === "Nicknames") {
        const nickname = nicknameInput.value.trim().toLowerCase();
        foundPlayer = players.find(
            p => p.nickname.toLowerCase() === nickname
        );
    }

    displayResult(foundPlayer);
}

function displayResult(player) {
    if (!player) {
        resultDiv.innerHTML = "<p>No player found.</p>";
        return;
    }

    resultDiv.innerHTML = `
        <h3>${player.firstName} ${player.lastName}</h3>
        <p>Number: ${player.number}</p>
        <p>Nickname: ${player.nickname}</p>
    `;
}