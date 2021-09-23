let d = document,
    c = console.log,
    $selectPrimary = d.getElementById("select-primary"),
    $selectSecondary = d.getElementById("select-secondary");

function loadStates() {}

function loadTowns(state) {}

d.addEventListener("DOMContentLoaded", loadStates);
$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));