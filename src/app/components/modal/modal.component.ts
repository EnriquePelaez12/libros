import { NgForm } from '@angular/forms';
import { BookInterface } from './../../models/book';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    private dataApi: DataApiService ) { }
    @ViewChild('btnClose') btnClose: ElementRef; //para cerrar el modal al momento de guardar
    @Input() userUid: string;
 
    
    ngOnInit() {
  }

  //metodo para guardar y modificar libros
  onSaveBook( bookForm: NgForm):void {
   // console.log('bookForm.value.id', bookForm.value.id);
    if(bookForm.value.id == null){
    //nuevo
    bookForm.value.userUid = this.userUid;//te gusrda el usuario que creo el documento
    this.dataApi.addBook(bookForm.value);
    }else{
      //actializar

      this.dataApi.updateBook(bookForm.value);
    }
    bookForm.resetForm(); //para limpiar formulario
    this.btnClose.nativeElement.click();
  }

}
