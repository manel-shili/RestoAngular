import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { SignComponent } from './components/sign/sign.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayAdminComponent } from './components/display-admin/display-admin.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
 { path: '', component: HomeComponent},
 { path: 'login', component: LoginComponent},
 { path: 'add-admin', component: AddAdminComponent},
 { path: 'add-plat', component: AddPlatComponent},
 { path: 'add-chef', component: AddChefComponent},
 { path: 'signup', component: SignComponent },
 { path:'dashboard-admin', component: DashbordAdminComponent},
 { path: 'dashboard-chef' , component: DashboardChefComponent },
 { path: 'displayUser/:id' , component:DisplayUserComponent },
 { path: 'displayAdmin/:id' ,component:  DisplayAdminComponent},
 { path: 'displayChef/:id' ,component:  DisplayChefComponent},
 { path: 'editAdmin/:id' ,component:  AddAdminComponent},
 { path: 'editChef/:id', component: AddChefComponent},
 { path: 'editPlat/:id', component: AddPlatComponent},
 { path: 'searchPlat', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
