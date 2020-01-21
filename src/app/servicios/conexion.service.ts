import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// Agregamos map y el interface
import { map } from 'rxjs/operators';

export interface Item { nombre: string; apellido: string; edad: number; id: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  // esta variable es para poder manipular los documentos y es gracias AngularFirestoreDocument
  itemDoc: AngularFirestoreDocument<Item>;
  constructor(private afs: AngularFirestore) {
    // items es como se llama nuestra colleccion de firebase
    // Item es como se llama la variable que hemos echo en el interface
    // items tambien se llama la variable que hemos creado para luego pinta el html.
    this.itemsCollection = afs.collection<Item>('items');
    // snapshotChanges() nos permite traernos el id de nuestra coleccion
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );


  }
  // Fin del constructor
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  listaitem() {
    return this.items;
  }
  eliminaritem(item) {

    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }
  editaritem(item) {

    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }


}
