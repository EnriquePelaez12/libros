import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { take, map, tap} from 'rxjs/operators';
import { auth } from 'firebase';
//import { CanActivate } from '@angular/router/src/utils/preactivation';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private afsAuth: AngularFireAuth,
     private router: Router) {}
     //metodo para 
  canActivate(
    netx: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      return this.afsAuth.authState
      .pipe(take(1))
      .pipe(map(authState => !! authState))
      .pipe(tap(auth =>{
        if(!auth){
          this.router.navigate(['/user/login']);
        }

      }))
      
    }
  
}
