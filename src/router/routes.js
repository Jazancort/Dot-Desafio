const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/checkout', component: () => import('src/pages/checkout/Index.vue') }
    ]
  },

  {
    path: '',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
