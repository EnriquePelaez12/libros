import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private afsAuth: AngularFireAuth
   ) { }

  //propiedades
  public app_name: string = 'Figther of the Raiking';
  public isLogged: boolean = false;


  ngOnInit() {
    this.getCurrentUser();

  }
  
  //metodo para saber si el usuario esta logado
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth => { 
      if(auth){
        console.log('user logged');
        this.isLogged = true;
              } else {
                console.log('NOT user Logged');
                this.isLogged = false;
              }
    });

  }

  //metodo para salir 
  onLogout(){
    this.afsAuth.auth.signOut();

  }
 
}
