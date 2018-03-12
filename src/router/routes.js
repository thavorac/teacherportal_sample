export default [
    {
        path: '/',
        component: () => import('layouts/starter'),
        children: [
            {path: '', component: () => import('pages/starter/splashscreen')},
            {path: 'introduction', component: () => import('pages/starter/introduction')},
            {path: 'login', component: () => import('pages/starter/login')}
        ]
    },
    {
        path: '/dashboard',
        component: () => import('layouts/main'),
        children: [
            {
                path: '',
                component: () => import('pages/dashboard'),
                meta: {
                    requireAuth : true
                }
            }
        ]
    },
    {
        path: '/activity/',
        component: () => import('layouts/secondary'),
        children: [
            {
                path: 'profile',
                component: () => import('pages/activity/profile'),
                meta: {
                    requireAuth : true
                }
            },
            {
                path: 'course/list',
                component: () => import('pages/activity/course/list'),
                meta: {
                    requireAuth : true
                }
            },
            {
                path: 'course/tree',
                component: () => import('pages/activity/course/tree'),
                meta: {
                    requireAuth : true
                }
            },
            {
                path: 'student/list',
                component: () => import('pages/activity/student/list'),
                meta: {
                    requireAuth : true
                }
            }
        ]
    },

    { // Always leave this as last one
        path: '*',
        component: () => import('pages/error/404')
    }
]
