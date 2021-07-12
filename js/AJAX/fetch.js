(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();
    //ejecución del método fetch, mismo que no requiere ser instanciado
    //espera el recurso de donde obtenga los datos
    //then = éxito
    //catch = fracaso
    //finally = se ejecutará si o si
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
        })
        .then((json) => {
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} | ${el.email} | ${el.phone}`;
                //añadimos los li a un fragment
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $fetch.innerHTML = `<p>Error ${err.status}: ${errorMessage}</p>`;
        })
        .finally(() => {
            console.log(
                "Esto se ejecutará independientemente del resultado de la promesa Fetch"
            );
        });
})();