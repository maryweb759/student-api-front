import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { OptionsComponent } from './components/options/options.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { CanActivateRouteService } from './service/can-activate-route.service';
import { LoginActivateService } from './service/login-activate.service';

const routes: Routes = [
  { path: 'register', component: RegisterComponent,  canActivate:[LoginActivateService]  },
  { path: 'content', component: ContentComponent, canActivate:[LoginActivateService] },

  { path: 'option', component: OptionsComponent, canActivate:[CanActivateRouteService] },
  { path: 'options/:id', component: OptionsComponent, canActivate:[CanActivateRouteService] },

  { path: 'students', component: StudentComponent , canActivate:[CanActivateRouteService]},
  { path: 'students/:name', component: StudentComponent , canActivate:[CanActivateRouteService]},

  { path: '', component: StudentComponent ,canActivate:[CanActivateRouteService]},
  { path: '**', component: StudentComponent, canActivate:[CanActivateRouteService] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
