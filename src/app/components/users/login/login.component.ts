import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService} from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    ) { }

    public email: string = '';
    public password: string = '';
  ngOnInit() {
  }

  onLogin(): void {
  this.authService.loginEmailUser(this.email, this.password)
    .then((res)=>{
    this.onLoginRedirect();
  }).catch(err => console.log('err', err.message));

}

  //metodo para abrir una ventana flotante de google
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  //metodo para salir 
  onLogout() {
    this.authService.logoutUser();
  }

  //
  onLoginRedirect(){
    this.router.navigate(['admin/list-fighter']);//si esta logueado se manda a esa direccion

  }

}