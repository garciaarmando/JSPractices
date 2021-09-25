const d = document,
    c = console.log,
    $site = d.getElementById("site"),
    $posts = d.getElementById("posts"),
    $loader = d.querySelector(".loader"),
    $template = d.getElementById("post-template").content,
    $fragment = d.createDocumentFragment(),
    DOMAIN = "https://www.remedygames.com",
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    PAGES = `${API_WP}/pages`,
    CATEGORIES = `${API_WP}/categories`;
USERS = `${API_WP}/users`;

function getSiteData() {
    fetch(SITE)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            // c(json);
            $site.innerHTML = `
            <h3>Web Site</h3>
            <h2>
            <a href="${json.url}" target="_blank">${json.name}</a>
            </h2>
            <p>${json.description}</p>
            <p>${json.timezone_string}</p>
            `;
        })
        .catch((err) => {
            c(err);
            let message = err.statusText || "Something went wrong";
            $site.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            $loader.style.display = "none";
        });
}

function getPosts() {
    $loader.style.display = "block";
    fetch(POSTS)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
            console.log(json);
            json.forEach((el) => {
                let categories = "",
                    tags = "";

                el._embedded["wp:term"][0].forEach(
                    (el) => (categories += `<li>${el.name}</li>`)
                );
                el._embedded["wp:term"][1].forEach(
                    (el) => (tags += `<li>${el.name}</li>`)
                );

                $template.querySelector(".post-image").src =
                    el._embedded[
                        "wp:featuredmedia"
                    ][0].media_details.sizes.medium_large.source_url;

                $template.querySelector(".post-image").alt = el.title.rendered;

                $template.querySelector(".post-title").innerHTML = el.title.rendered;

                $template.querySelector(".post-author").innerHTML = `
                        <img src="${el._embedded.author[0].avatar_urls["48"]}" alt="${el._embedded.author[0].name}">
                        <figcaption>${el._embedded.author[0].name}</figcaption>
                        `;

                $template.querySelector(".post-date").innerHTML = new Date(
                    el.date
                ).toLocaleString();

                $template.querySelector(".post-link").href = el.link;

                $template.querySelector(".post-excerpt").innerHTML =
                    el.excerpt.rendered.replace("[&hellip;]", "...");

                $template.querySelector(".post-categories").innerHTML = `
                <p>Categories</p>
                <ul>${categories}</ul>
                `;

                $template.querySelector(".post-tags").innerHTML = `
                <p>Tags</p>
                <ul>${tags || "There isn't any tag to show"} </ul>
                `;

                $template.querySelector(".post-content > article").innerHTML =
                    el.content.rendered;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $posts.appendChild($fragment);
            $loader.style.display = "none";
        })
        .catch((err) => {
            c(err);
            let message = err.statusText || "Something went wrong";
            $posts.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            $loader.style.display = "none";
        });
}

d.addEventListener("DOMContentLoaded", (e) => {
    getSiteData();
    getPosts();
});