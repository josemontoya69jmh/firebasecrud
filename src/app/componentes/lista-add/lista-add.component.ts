import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';


@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item: any = {
    nombre: '',
    apellido: '',
    edad: ''
  };

  constructor( private servicio: ConexionService) { }

  ngOnInit() {
  }
agreagar() {

  this.servicio.agregarItem( this.item );
  // Esto nos limpia los campos
  this.item.nombre = '';
  this.item.apellido = '';
  this.item.edad = '';
}

}
