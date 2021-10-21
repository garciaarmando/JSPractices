export function PostCard(props) {
    let { date, _embedded, id, slug, title } = props,
    dateFormat = new Date(date).toLocaleString(),
        urlPoster = _embedded["wp:featuredmedia"] ?
        _embedded["wp:featuredmedia"][0].source_url :
        "app/assets/taco.png";

    document.addEventListener("click", e => {
        if (!e.target.matches(".post-card a")) return false;

        localStorage.setItem("wpPostId", e.target.dataset.id);
    });
    return `
  <article class="post-card">
  <img src="${urlPoster}" alt="${title.rendered}">
  <h2>${title.rendered}</h2>
  <p>
  <time datetime="${date}">${dateFormat}</time>
  <a href="#/${slug}" data-id="${id}">See original post</a>
  </p>
  </article>
  `;
}