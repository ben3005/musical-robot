// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent} from '../app/list.component';

// Route Configuration
export const routes: Routes = [
    {
        path: 'list',
        component: ListComponent
    }
];
export const listRoutes: ModuleWithProviders = RouterModule.forRoot(routes) ;