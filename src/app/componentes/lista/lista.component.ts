import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicios/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  items: any;

  constructor(private conexion: ConexionService) {
   this.conexion.listaitem().subscribe( item => {

    this.items = item;
    console.log(this.items);
   });

   }

  ngOnInit() {
  }

}
