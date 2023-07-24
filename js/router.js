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
  "/Lehrbuch/about": "/pages/about.html",
  "/Lehrbuch/chapter1": "/pages/chapter1.html",
  "/Lehrbuch/chapter11": "/pages/chapter1.html",
  "/Lehrbuch/chapter12": "/pages/chapter12.html",
  "/Lehrbuch/chapter13": "/pages/chapter13.html",
  "/Lehrbuch/chapter2": "/pages/chapter2.html",
  "/Lehrbuch/chapter3": "/pages/chapter3.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  console.log(route);

  const html = await fetch(route).then((data) => data.text());
  document.body.innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
