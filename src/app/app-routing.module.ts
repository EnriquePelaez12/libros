import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { ListFighterComponent } from './components/admin/list-fighter/list-fighter.component';
//se estan asignando las rutas para enlazar las paginas
const routes: Routes = [
  {path: '', component: HomeComponent  },
  {path: 'offers', component: OffersComponent, canActivate: [AuthGuard] },
  {path: 'admin/list-fighter', component: ListFighterComponent, canActivate: [AuthGuard] },
  {path: 'book/:id', component: DetailBookComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  {path: '**', component: Page404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
