export default [
    {
        path: '/starter/',
        component: () => import('layouts/starter'),
        children: [
            {path: 'splashscreen', component: () => import('pages/starter/splashscreen')},
            {path: 'introduction', component: () => import('pages/starter/introduction')},
            {path: 'login', component: () => import('pages/starter/login')}
        ]
    },
    {
        path: '/',
        component: () => import('layouts/main'),
        children: [
            {path: 'dashboard', component: () => import('pages/dashboard')}
        ]
    },
    {
        path: '/activity/',
        component: () => import('layouts/secondary'),
        children: [
            {path: 'profile', component: () => import('pages/profile')}
        ]
    },

    { // Always leave this as last one
        path: '*',
        component: () => import('pages/404')
    }
]
