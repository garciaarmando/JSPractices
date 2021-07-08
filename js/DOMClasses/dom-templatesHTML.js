//template = machote o modelo a seguir

const $cards = document.querySelector(".cards");
//accediendo al contenido de template
$template = document.getElementById("template-card").content;
$fragment = document.createDocumentFragment();
cardContent = [{
        title: "Tecnología",
        img: "https://placeimg.com/200/200/tech",
    },
    {
        title: "Animales",
        img: "https://placeimg.com/200/200/animals",
    },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    },
];

cardContent.forEach((el) => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    /* importNode sirve para clonar todo el template original ya que después de haberlo utilizado una vez con el código de arriba, deja de estar disponible
     */
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);