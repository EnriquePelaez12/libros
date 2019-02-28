import { ModalComponent } from './components/modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { Page404Component } from './components/page404/page404.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';

//notification
//import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ToastrModule} from 'ngx-toastr';


//estamos importando las dependencias para conectar fire base
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth} from '@angular/fire/auth';
import { ListFighterComponent } from './components/admin/list-fighter/list-fighter.component';
import { from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    HeroComponent,
    HomeComponent,
    OffersComponent,
    Page404Component,
    DetailBookComponent,
    ListFighterComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
    
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
