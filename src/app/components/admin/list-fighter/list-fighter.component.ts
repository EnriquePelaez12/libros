
import { BookInterface } from './../../../models/book';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm}  from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInterface } from './../../../models/user';
import { AuthService } from './../../../services/auth.service';

@Component({
  selector: 'app-list-fighter',
  templateUrl: './list-fighter.component.html',
  styleUrls: ['./list-fighter.component.css']
})
export class ListFighterComponent implements OnInit {

  constructor(
   private dataApi: DataApiService,
   private authService: AuthService) { }

   //propiedad como un arrive
   private books: BookInterface [];
   public isAdmin: any = null;
   public userUid: string = null;

  ngOnInit() {
    this.getListBooks();
    this.getCurrentUser();
  }


  //metodo para comprovar si es usuario es admin o no
  getCurrentUser(){
    this.authService.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
        this.authService.isUSerAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          //this.isAdmin = true;
       
        })
      }
    })
  }

  getListBooks() {
    this.dataApi.getAllBooks()
      .subscribe(books => {
        this.books = books;
      });
  }



  onDeleteBook(idBook: string): void {
    const confirmacion = confirm('¿Estas seguro de Eliminar?')
    if(confirmacion){
      this.dataApi.deleteBook(idBook);
    }
  }
  onPreUpdateBook(book: BookInterface): void{
    console.log('BOOK', book)
    this.dataApi.selectedBook = Object.assign({}, book);

  }

}
