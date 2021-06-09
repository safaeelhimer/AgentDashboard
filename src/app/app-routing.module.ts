import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { AgentdashboardComponent } from './modules/agentdashboard/agentdashboard.component';
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
  }]
},
{path:"login", component : LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
