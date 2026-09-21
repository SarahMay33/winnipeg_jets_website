document.getElementById("search").addEventListener("click", function () {
    const team = document.getElementById("teamSelect").value;

    if (team === "default") {
        alert("Please select a team first.");
        return;
    }

    // Redirect to the matching HTML file
    window.location.href = team + ".html";
});

