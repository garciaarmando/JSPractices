let d = document,
    c = console.log,
    $form = d.getElementById("song-search"),
    $loader = d.querySelector(".loader"),
    $error = d.querySelector(".error"),
    $main = d.querySelector("main"),
    $artist = d.querySelector(".artist"),
    $song = d.querySelector(".song");

$form.addEventListener("submit", async(e) => {
    e.preventDefault();
    try {
        $loader.style.display = "block";

        let artist = e.target.artist.value.toLowerCase(),
            song = e.target.song.value.toLowerCase(),
            $artistTemplate = "",
            $songTemplate = "",
            artistAPI = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
            songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
            artistFetch = fetch(artistAPI),
            songFetch = fetch(songAPI),
            [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
            artistData = await artistRes.json(),
            songData = await songRes.json();

        // c(artistRes, songRes);
        c(artistData, songData);

        if (artistData.artists === null) {
            $artistTemplate = `<h2>There isn't interpreter called <mark>${artist}</mark> </h2>`;
        } else {
            let artist = artistData.artists[0];
            $artistTemplate = `
        <h2>${artist.strArtist}</h2>
        <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
        <p>${artist.intBornYear || "Unknown"} - ${
        artist.intDiedYear || "Present"
      }</p>
        <p>${artist.strCountry}</p>
        <p>${artist.strGenre} - ${artist.strStyle}</p>
        <a href="http://${artist.strWebsite}" target="_blank">Website</a>
        <p>${artist.strBiographyEN}</p>
        `;
        }
        if (songData.error) {
            $songTemplate = `<h2>The song <mark>${song}</mark> doesn't exist</h2>`;
        } else {
            $songTemplate = `
        <h2>${song.toUpperCase()}</h2>
        <blockquote>${songData.lyrics}</blockquote>
        `;
        }
        $loader.style.display = "none";
        $artist.innerHTML = $artistTemplate;
        $song.innerHTML = $songTemplate;
    } catch (err) {
        c(err);
        let message = err.statusText || "There was an error";
        $error.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;
        $loader.style.display = "none";
    }
});