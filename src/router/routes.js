
const routes = [
  {
    path: '/',
    component: () => import('layouts/layout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') },
      { path: '/tinerete', component: () => import('pages/tinerete.vue') },
      { path: '/netscapesijs', component: () => import('pages/netscapesijs.vue') },
      { path: '/mozilla', component: () => import('pages/mozilla.vue') },
      { path: '/brave', component: () => import('pages/brave.vue') },
      { path: '/final', component: () => import('pages/final.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/404.vue')
  })
}

export default routes
