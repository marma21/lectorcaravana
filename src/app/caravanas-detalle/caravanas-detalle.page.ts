import { Component, OnInit } from '@angular/core';
import { Caravana } from '../services/storage.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-caravanas-detalle',
  templateUrl: './caravanas-detalle.page.html',
  styleUrls: ['./caravanas-detalle.page.scss'],
})
export class CaravanasDetallePage implements OnInit {

  caravana: Caravana = {
    codigo:"",
    codigonfc:"",
    estado:""
  };
  tareas=[];
  lista_tareas=[];
  caravanaid:string;
  constructor( 
    public toastController: ToastController,
    private storage:Storage,
    public route: ActivatedRoute,
    private router:Router,
    private nfc: NFC) { }

  ngOnInit() {
    this.caravanaid=this.route.snapshot.params.id;
    if(this.caravanaid){
      this.loadCaravana(this.caravanaid);
    }else{
      this.nfc.addNdefListener(() => {
        console.log('successfully attached ndef listener');
        this.presentToast('Sensor NFC activo','success',2000,top);
      }, (err) => {
        console.log('error attaching ndef listener', err);
        this.presentToast('Error al activar NFC'+err,'danger',3000,top);
      }).subscribe((event) => {
        this.presentToast('Leido!!','warning',1000,'middle');
        this.caravana.codigonfc=this.nfc.bytesToHexString(event.tag.id);
      });
    }
  }
  loadCaravana(key){
    this.storage.get('CAR_'+key).then ((val)=>{
      this.caravana=val;
      this.storage.forEach((value,key,index) => {
        if (key.substring(0,4)=="TAR_"){
          if(value.caravanas.find(x=>x.codigo==this.caravana.codigo)!=undefined){
            this.tareas.push(value);
          }
        }
       }).then(()=>{})
      })
    }

  grabar(){
    this.storage.set('CAR_'+this.caravana.codigo,this.caravana);
    this.router.navigateByUrl('/tabs/(caravanas:caravanas)');
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
