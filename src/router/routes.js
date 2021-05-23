const routes = [
  {
    path: "/",
    component: () => import("layouts/layout.vue"),
    children: [
      { path: "", component: () => import("pages/index.vue") },
      { path: "/tinerete", component: () => import("pages/tinerete.vue") },
      {
        path: "/netscapesijs",
        component: () => import("pages/netscapesijs.vue")
      },
      { path: "/mozilla", component: () => import("pages/mozilla.vue") },
      { path: "/trace", component: () => import("pages/trace.vue") },
      { path: "/jager", component: () => import("pages/jager.vue") },
      { path: "/ion", component: () => import("pages/ion.vue") },
      { path: "/odin", component: () => import("pages/odin.vue") },
      { path: "/brave", component: () => import("pages/brave.vue") },
      { path: "/final", component: () => import("pages/final.vue") }
    ]
  },
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
