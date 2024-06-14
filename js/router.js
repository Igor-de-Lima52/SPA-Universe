export class Router{
    routes = {};
    add(routeName, page){
        this.routes[routeName] = page;
    }
    route(event){
        event = event || window.event;
        event.preventDefault();
        window.history.pushState({}, "", event.target.href);
        this.handle();
    }
    handle(){
        const home = document.querySelector("nav #home");
        const universe = document.querySelector("nav #universe");
        const exploration = document.querySelector("nav #exploration");
        const bodyImageBackground = document.querySelector("body");
        const {pathname} = window.location;
        const route = this.routes[pathname] || this.routes[404];
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML = html;
        })
        switch(pathname){
            case "/":
                home.classList.add("active");
                universe.classList.remove("active");
                exploration.classList.remove("active");
                bodyImageBackground.classList.add("image1");
                bodyImageBackground.classList.remove("image2");
                bodyImageBackground.classList.remove("image3");
                break;
            case "/index.html":
                home.classList.add("active");
                universe.classList.remove("active");
                exploration.classList.remove("active");
                bodyImageBackground.classList.add("image1");
                bodyImageBackground.classList.remove("image2");
                bodyImageBackground.classList.remove("image3");
                break;
            case "/universe":
                home.classList.remove("active");
                universe.classList.add("active");
                exploration.classList.remove("active");
                bodyImageBackground.classList.remove("image1");
                bodyImageBackground.classList.add("image2");
                bodyImageBackground.classList.remove("image3");
                break;
            case "/exploration":
                home.classList.remove("active");
                universe.classList.remove("active");
                exploration.classList.add("active");
                bodyImageBackground.classList.remove("image1");
                bodyImageBackground.classList.remove("image2");
                bodyImageBackground.classList.add("image3");
                break;
        }
    }
}