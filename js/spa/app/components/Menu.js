export function Menu() {
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
  <a href="#/">Home</a>
  <span>-</span>
  <a href="#/search">Search</a>
  <span>-</span>
  <a href="https://armandogarcia.xyz/" target="_blank" rel="noopener">Learn More</a>
  `;
    return $menu;
}