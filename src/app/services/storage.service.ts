import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Caravana {
  codigo: string;
  estado:string;
  codigonfc: string;
}

export interface Tarea {
  id?: any;
  createdAt: number;
  tarea: string;
  descripcion:string;
  caravanas:any
}
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  caravana:Caravana;
  constructor(private storage: Storage) {  }
  
  getCaravanas(){
    const promises=[];
     this.storage.forEach((value,key,index) => {
      promises.push(value) ;
     }).then(()=>{})
     return promises;
  }

  setCaravana(caravana){
    this.storage.set(caravana.codigo,caravana)
  }

  removeCaravana(key){
    this.storage.remove(key);
  }

  getCaravana(key){
    console.log(key);
    this.storage.get(key).then((val)=>{
      this.caravana= val;
    }).then();


    
    
  }

}
