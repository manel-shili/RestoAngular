import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';

import { SignComponent } from './components/sign/sign.component';
import { DashbordAdminComponent } from './components/dashbord-admin/dashbord-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { RouterModule } from '@angular/router';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayAdminComponent } from './components/display-admin/display-admin.component';
import { DisplayChefComponent } from './components/display-chef/display-chef.component';
import { InvercePipe } from './inverce.pipe';
import { InversePipe } from './pipes/inverse.pipe';
import { AstreixPipe } from './pipes/astreix.pipe';
import { HttpClientModule  } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
// import { DataService } from './service/data.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    LoginComponent,
    AddAdminComponent,
    AddChefComponent,
    AddPlatComponent,
    SignComponent,
    
    DashbordAdminComponent,
  
    DashboardChefComponent,
  
    DisplayUserComponent,
  
    DisplayAdminComponent,
  
    DisplayChefComponent,
  
    InvercePipe,
  
    InversePipe,
  
    AstreixPipe,
  
    SearchComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    // InMemoryWebApiModule.forRoot(DataService),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
