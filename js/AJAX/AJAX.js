/**********XMLHttpRequest**********/

(() => {
    //1 -> se instancia xmlhttp
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    //2 -> asigarle el o los eventos que se vayan a estar manipulando de la petición y donde irá la lógixa de la petición
    xhr.addEventListener("readystatechange", (e) => {
        //validación que sólo mostrará la petición si está lista para manipularse, es deciro en código 4 (READY_STATE_COMPLETE)
        if (xhr.readyState !== 4) return;
        //validación para indicar que sólo cuando la petición de tipo 200 se ejecute la lógica
        if (xhr.status >= 200 && xhr.status < 300) {
            //de JSON lo convertimos a objeto
            let json = JSON.parse(xhr.responseText);
            //por cada objeto, pintamos un li con las propiedades nombre, email y phone
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} | ${el.email} | ${el.phone}`;
                //añadimos los li a un fragment
                $fragment.appendChild($li);
            });
        } else {
            let errorMessage =
                xhr.statusText || "Ocurrió un error al tratar de obtener los datos";
            $xhr.innerHTML = `<p>Error ${xhr.status}: ${errorMessage}</p>`;
        }
        //insertamos el fragment en el elemento del html con el id xhr
        $xhr.appendChild($fragment);
    });

    //3 -> abir la petición y establecer el método por el que vamos a realizar la petición y el endpoint
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    //4 -> enviar la petición
    xhr.send();
})();

/**********FETCH**********/
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
            /* console.log("Esto se ejecutará independientemente del resultado de la promesa Fetch"); */
        });
})();
/**********FETCH + Async-Await**********/
(() => {
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragment = document.createDocumentFragment();
    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();
            if (!res.ok) {
                throw { status: res.status, statusText: res.statusText };
            }
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} | ${el.email} | ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
        } catch (err) {
            let errorMessage =
                err.statusText || "Ocurrió un error al tratar de obtener los datos";
            $fetchAsync.innerHTML = `<p>Error ${err.status}: ${errorMessage}</p>`;
        } finally {}
    }
    getData();
})();

/**********AXIOS**********/
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            let json = res.data;
            json.forEach((el) => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} | ${el.email} | ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
        .catch((err) => {
            let errorMessage =
                err.response.statusText ||
                "Ocurrió un error al tratar de obtener los datos";
            $axios.innerHTML = `<p>Error ${err.response.status}: ${errorMessage}</p>`;
        })
        .finally(() => {
            console.log(
                "Esto se ejecutará independientemente del resultado de Axios"
            );
        });
})();