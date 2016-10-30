import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { listRoutes } from '../Routes/routes.components.list';
import { mapsRouting } from '../Routes/routes.components.maps';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Maps',
        pathMatch: 'full'
    },
    listRoutes,
    mapsRouting
];
