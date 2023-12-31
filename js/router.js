const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

async function scrollToTop() {
  window.scrollTo(0, 0);
}

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
  "/chapter21": "/pages/chapter21.html",
  "/chapter22": "/pages/chapter22.html",
  "/chapter23": "/pages/chapter23.html",
  "/chapter24": "/pages/chapter24.html",
  "/chapter3": "/pages/chapter31.html",
  "/chapter41": "/pages/chapter41.html",
  "/chapter51": "/pages/chapter51.html",
  "/chapter52": "/pages/chapter52.html",
  "/chapter53": "/pages/chapter53.html",
  "/chapter61": "/pages/chapter61.html",
  "/chapter62": "/pages/chapter62.html",
  "/chapter63": "/pages/chapter63.html",
  "/chapter71": "/pages/chapter71.html",
  "/chapter81": "/pages/chapter81.html",
  "/chapter91": "/pages/chapter91.html",
  "/literatur": "/pages/literatur.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];

  const html = await fetch(route).then((data) => data.text());
  document.body.innerHTML = html;
  await scrollToTop();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
