import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopicsComponent } from './topics/topics.component';
import { ForumTemplateComponent } from './forum-template/forum-template.component';
import { CreateThreadComponent } from './create-thread/create-thread.component';
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
    },
    {
        path: "topics/forum/postthread",
        component: CreateThreadComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);