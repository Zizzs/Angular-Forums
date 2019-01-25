import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopicsComponent } from './topics/topics.component';
import { TechnologyForumComponent } from './technology-forum/technology-forum.component';
// Import Components to add to the router.



const appRoutes: Routes = [ 
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: "topics",
        component: TopicsComponent
    },
    {
        path: "topics/technology",
        component: TechnologyForumComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);