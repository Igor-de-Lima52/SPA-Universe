import { Router } from "./router.js";

const router = new Router();

router.add("/", "../pages/home.html");
router.add("/index.html", "../pages/home.html");
router.add("/universe", "../pages/universe.html");
router.add("/exploration", "../pages/exploration.html");

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => router.route(event));
});

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route();