const d = document,
    n = navigator;
export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

    const success = (position) => {
        let coords = position.coords;
        $id.innerHTML = `<p>Tu posición actual es: </p>
         <ul>
      <li><b>Latitud: ${coords.latitude}</b></li>
      <li><b>Longitud: ${coords.longitude}</b></li>
      <li><b>Precisión (m): ${coords.accuracy}</b> metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>
      `;
    };
    const error = (err) => {
        $id.innerHTML = `<p>
        Error del tipo: ${err.code}: <mark>${err.message}</mark>
      </p>`;
    };

    n.geolocation.getCurrentPosition(success, error, options);
}