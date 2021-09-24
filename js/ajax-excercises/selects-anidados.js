let d = document,
    c = console.log,
    $selectPrimary = d.getElementById("select-primary"),
    $selectSecondary = d.getElementById("select-secondary"),
    $selectThird = d.getElementById("select-third");

function loadStates() {
    fetch(
            "https://api.copomex.com/query/get_estados?token=77f0a365-d4b1-48d7-a149-1b08170e0769"
        )
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            c(json);

            let $options = `<option value="">Choice an State</option>`;

            json.response.estado.forEach(
                (el) => ($options += `<option value="${el}">${el}</option>`)
            );

            $selectPrimary.innerHTML = $options;
        })
        .catch((err) => {
            c(err);

            let message = err.statusText || "An error has occurred";
            $selectPrimary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
        });
}

function loadTowns(state) {
    fetch(
            `https://api.copomex.com/query/get_municipio_por_estado/${state}?token=77f0a365-d4b1-48d7-a149-1b08170e0769`
        )
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            c(json);

            let $options = `<option value="">Choice a Municipality</option>`;

            json.response.municipios.forEach(
                (el) => ($options += `<option value="${el}">${el}</option>`)
            );

            $selectSecondary.innerHTML = $options;
        })
        .catch((err) => {
            c(err);

            let message = err.statusText || "An error has occurred";
            $selectSecondary.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
        });
}

function loadColony(municipality) {
    fetch(
            `https://api.copomex.com/query/get_colonia_por_municipio/${municipality}?token=77f0a365-d4b1-48d7-a149-1b08170e0769`
        )
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            c(json);
            let $options = `<option value="">Choice a Colony</option>`;

            json.response.colonia.forEach(
                (el) => ($options += `<option value="${el}">${el}</option>`)
            );

            $selectThird.innerHTML = $options;
        })
        .catch((err) => {
            c(err);

            let message = err.statusText || "An error has occurred";
            $selectThird.nextElementSibling.innerHTML = `Error ${err.status}: ${message}`;
        });
}

d.addEventListener("DOMContentLoaded", loadStates);
$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));
$selectSecondary.addEventListener("change", (e) => loadColony(e.target.value));