import { NavbarComponent } from './../../navbar/navbar.component';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //despues de importar se tiene que inyectar en el constructos,
  //como se puede apreciar
  constructor(
    private router: Router,
    private authService: AuthService,
    private storage: AngularFireStorage) { }

  @ViewChild('imageUser') imputImageUser: ElementRef;

  //atributos
  public email: string = '';
  public password: string = '';

  //propiedad
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  ngOnInit() {
  }
  
  //metodo para subir la imagen
  onUpload(e) {
    const id = Math.random().toString(36).substring(2);//se declara id aleatoreo para el nombre de la imagen
    const file = e.target.files[0]; //se obtiene el archivo
    const filePath = `uploads/profile_${id}`;//sube la imagen con nombre aleatorio
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file); //aqui ya se esta subiendo la imagen
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())) //estamos recuperando la url
      .subscribe();
  }
  //metodo para agregar usuario
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if (user) {
            user.updateProfile({
              displayName: '',
              photoURL: this.imputImageUser.nativeElement.value
            }).then(() => {
              this.onLoginRedirect();
            }).catch((error) => console.log('error', error));
          }
        });
      }).catch(err => console.log('err', err.message));
  }

  //entra con google
  onLoginGoogle(): void {
    this.authService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  //metodo me manda a una ruta
  onLoginRedirect() {
    this.router.navigate(['admin/list-fighter']);//si esta logueado se manda a esa direccion

  }

}
