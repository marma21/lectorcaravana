import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/storage.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tareas-detalle',
  templateUrl: './tareas-detalle.page.html',
  styleUrls: ['./tareas-detalle.page.scss'],
})
export class TareasDetallePage implements OnInit {

  lista_caravanas=[];
  tarea:Tarea ={
    createdAt: new Date().getTime(),
    id:'TAR_'+new Date().getTime(),
    caravanas: [],
    descripcion:"",
    tarea:""
  };

  tareaid:string;
  constructor( 
    public toastController: ToastController,
    private storage:Storage,
    public route: ActivatedRoute,
    private router:Router,
    private nfc: NFC) { }

  ngOnInit() {
    this.tareaid=this.route.snapshot.params.id;
    this.loadCaravanas();
    if(this.tareaid){
      this.loadTarea(this.tareaid);
    }else{
      this.nfc.addNdefListener(() => {
        this.presentToast('Sensor NFC activo','success',2000,top);
      }, (err) => {
        this.presentToast('Error al activar NFC'+err,'danger',3000,top);
      }).subscribe((event) => {
        this.presentToast('Leido!!','warning',1000,'middle');
        //this.caravana.codigonfc=this.nfc.bytesToHexString(event.tag.id);      
      this.tarea.caravanas.push(this.lista_caravanas.find(x=>x.codigonfc==this.nfc.bytesToHexString(event.tag.id)));
      });
    }
  }

  loadTarea(key){
    this.storage.get(key).then ((val)=>{
      this.tarea=val;
    })
    }
    
  loadCaravanas(){
      this.lista_caravanas=[];
      this.storage.forEach((value,key,index) => {
        if (key.substring(0,4)=="CAR_"){
          this.lista_caravanas.push(value) ;
        }     
       }).then(()=>{})
    
      }
    
  grabar(){
    this.storage.set(this.tarea.id,this.tarea);
    this.router.navigateByUrl('/tabs/(tareas:tareas)');
  }

  async presentToast(message,color,duracion:number,position) {
    const toast = await this.toastController.create({
      message: message,
      duration: duracion,
      position:position,
      color:color
    });
    toast.present();
  }
}
