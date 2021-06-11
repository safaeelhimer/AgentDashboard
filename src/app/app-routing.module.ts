import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { AddcompteComponent } from './modules/addcompte/addcompte.component';
import { AgentdashboardComponent } from './modules/agentdashboard/agentdashboard.component';
import { CdetailsComponent } from './modules/cdetails/cdetails.component';
import { ClientComponent } from './modules/client/client.component';
import { EspcaeagentComponent } from './modules/espcaeagent/espcaeagent.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
  path:'',
  component: DefaultComponent,
  children: [{
    path:'',
    component: AgentdashboardComponent
  }, {
  path:'versement',
  component: PostsComponent
  },
  {
    path:'client',
    component: ClientComponent
    },
    {
      path:'clientDetails/:id',
      component: CdetailsComponent
      },
      {
        path:'espaceagent',
        component: EspcaeagentComponent
        },
        {
          path:'addcompte',
          component: AddcompteComponent
          }



]
},
{path:"login", component : LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
