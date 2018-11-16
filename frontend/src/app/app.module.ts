import { BrowserModule } from '@angular/platform-browser';

// FORMS
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

// HTTPclient
import {HttpClientModule} from '@angular/common/http'
// Rutas
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EscenariosComponent } from './components/escenarios/escenarios.component';
import { Unidad01Component } from './components/escenarios/unidad01/unidad01.component';
import { Unidad02Component } from './components/escenarios/unidad02/unidad02.component';
import { Unidad03Component } from './components/escenarios/unidad03/unidad03.component';
import { Unidad04Component } from './components/escenarios/unidad04/unidad04.component';
import { MenuComponent } from './components/escenarios/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {  path: '', component:  HomeComponent },
  {  path: 'login', component:  LoginComponent },
  {  path: 'escenarios', component:  EscenariosComponent },
  {  path: 'unidad01', component:  Unidad01Component },
  {  path: 'unidad02', component:  Unidad02Component },
  {  path: 'unidad03', component:  Unidad03Component },
  {  path: 'unidad04', component:  Unidad04Component },
  {  path: 'register', component:  RegisterComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    EscenariosComponent,
    Unidad01Component,
    Unidad02Component,
    Unidad03Component,
    Unidad04Component,
    MenuComponent,
    RegisterComponent     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
