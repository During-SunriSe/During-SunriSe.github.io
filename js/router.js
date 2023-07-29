const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  404: "/pages/404.html",
  "/": "./index.html",
  "/index.html": "./index.html",
  "/Lehrbuch/": "./index.html",
  "/about": "/pages/about.html",
  "/chapter1": "/pages/chapter1.html",
  "/chapter11": "/pages/chapter1.html",
  "/chapter12": "/pages/chapter12.html",
  "/chapter13": "/pages/chapter13.html",
  "/chapter2": "/pages/chapter21.html",
  "/chapter22": "/pages/chapter22.html",
  "/chapter23": "/pages/chapter23.html",
  "/chapter24": "/pages/chapter24.html",
  "/chapter3": "/pages/chapter3.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];

  const html = await fetch(route).then((data) => data.text());
  document.body.innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
