import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopicsComponent } from './topics/topics.component';
import { ForumTemplateComponent } from './forum-template/forum-template.component';
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
        path: "topics/forum",
        component: ForumTemplateComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);