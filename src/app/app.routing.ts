import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Components to add to the router.



const appRoutes: Routes = [ 
    //An example route 
    // {
    //     path: '',
    //     component: ExampleComponent
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);