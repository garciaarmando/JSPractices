import api from "./helpers/wp_api.js";
export function App() {
    document.getElementById("root").innerHTML = `<h1>Vanilla JS SPA</h1>`;
    console.log(api);
}