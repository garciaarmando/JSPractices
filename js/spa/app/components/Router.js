import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router() {
    const d = document,
        w = window,
        $posts = d.getElementById("posts");
    let { hash } = location;
    console.log(hash);
    $posts.innerHTML = null;

    if (!hash || hash === "#/") {
        ajax({
            url: api.POSTS,
            cbSuccess: posts => {
                // console.log(posts);
                let html = "";
                posts.forEach(post => (html += PostCard(post)));
                d.querySelector(".loader").style.display = "none";
                $posts.innerHTML = html;
            },
        });
    } else if (hash.includes("#/search")) {
        $posts.innerHTML = `<h2>Search section</h2>`;
    } else if (hash === "#/contact") {
        $posts.innerHTML = `<h2>Contact section</h2>`;
    } else {
        $posts.innerHTML = `<h2>In here, the post content will load</h2>`;
    }
}