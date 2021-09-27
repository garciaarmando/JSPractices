/* const DOMAIN = "https://css-tricks.com",
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    PAGES = `${API_WP}/pages`,
    CATEGORIES = `${API_WP}/categories`,
    USERS = `${API_WP}/users`; */

const NAME = "css-tricks.com",
    DOMAIN = `https://${NAME}.com`,
    SITE = `${DOMAIN}/wp-json`,
    API_WP = `${SITE}/wp/v2`,
    POSTS = `${API_WP}/posts?_embed`,
    POST = `${API_WP}/posts`,
    SEARCH = `${API_WP}/searh?_embed&search=`;

export default {
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    POSTS,
    POST,
    SEARCH,
};