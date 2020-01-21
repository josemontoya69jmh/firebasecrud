import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ConexionService } from './servicios/conexion.service';
import { ListaComponent } from './componentes/lista/lista.component';
import { ListaAddComponent } from './componentes/lista-add/lista-add.component';
// esto nos sirve para utilizar ([ngModule]), creo que en todos los componentes
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [ ConexionService ],
  bootstrap: [ AppComponent ],
  declarations: [ListaComponent, ListaAddComponent, AppComponent]
})

 export class AppModule{}