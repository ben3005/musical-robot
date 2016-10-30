// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent }     from '../app/map.component';


// Route Configuration
export const routes: Routes = [
    {
        path: 'maps',
        component: MapComponent
    }
];
export const mapsRouting: ModuleWithProviders = RouterModule.forRoot(routes);