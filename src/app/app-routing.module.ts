import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCalss } from './home';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundedComponent } from './notfounded/notfounded.component';


const routes: Routes = [
  {path:'', redirectTo:'Home' , pathMatch:'full'},
  {path:'Home',component:HomeCalss},
  {path:'About', component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Project',component:ProjectComponent},
  {path:"**" , component:NotfoundedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
