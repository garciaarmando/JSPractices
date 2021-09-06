const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb = (entries) => {
        //console.log('entries',entries)
        entries.forEach((entry) => {
            //console.log('entry',entry)
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.add(
                    "active"
                );
            } else {
                d.querySelector(`a[data-scroll-spy][href='#${id}']`).classList.remove(
                    "active"
                );
            }
        });
    };
    const observer = new IntersectionObserver(cb, {
        //root -> con base a qué se va a observar (default = document)
        // rootMargin: "-250px", //margen de la caja de observación, por defecto es 0px y con número negativo se puede hacer una caja de observación más pequeña
        threshold: [0.5, 0.75], //cuánto porcentaje del contenido debe estar visible para que se active la intersección, si lo expresas como arreglo puedes especificar un rango, p.ej del 50% al 75% de la altura del contenido
    });

    $sections.forEach((el) => observer.observe(el));
}