const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

let $contentCard = `
<img src="https://placeimg.com/200/200/any" alt="any">
<figcaption></figcaption>
`;
$newCard.classList.add("card");

//inserta $newCard antes del elemento $cards que se estátomando como referencia
$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any 2");
$cards.insertAdjacentElement("afterbegin", $newCard);

//métodos hermanos
$cards.prepend($newCard); //= 'afterbegin'
$cards.append($newCard); // = 'beforeened'
$cards.before($newCard); // = 'beforebegin'
$cards.after($newCard); // = 'afterend'