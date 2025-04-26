// src/configs/routes.config/sharedRoutes.ts

import { lazy } from 'react';
import type { Routes } from '@/@types/routes';

const sharedRoutes: Routes = [
    {
        key: 'homePage',
        path: `/hello`,
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    {
        key: 'signIn',
        path: `/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
];

export default sharedRoutes;
