import { initWelcome } from "./pages/welcome";
import { initComoJugar } from "./pages/comojugar";
import { initSelect } from "./pages/select";
import { initResultado } from "./pages/resultado";
import { initSelectEnd } from "./pages/select-end";

const BASE_PATH = "/desafio5-piedrapapeltijera";

function isGithubPages() {
  return location.host.includes("github.io");
}

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/comojugar/,
    component: initComoJugar,
  },
  {
    path: /\/elegir/,
    component: initSelect,
  },
  {
    path: /\/versus/,
    component: initSelectEnd,
  },
  {
    path: /\/resultado/,
    component: initResultado,
  },
];

export function initRouter(container: any) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    if (isGithubPages()) {
      const newRoute = route.replace(BASE_PATH, "/");

      for (const r of routes) {
        if (r.path.test(newRoute)) {
          const el = r.component({ goTo: goTo });
          if (container.firstChild) {
            container.firstChild.remove();
          }
          container.appendChild(el);
        }
      }
    } else {
      for (const r of routes) {
        if (r.path.test(route)) {
          const el = r.component({ goTo: goTo });

          if (container.firstChild) {
            container.firstChild.remove();
          }
          container.appendChild(el);
        }
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
}
