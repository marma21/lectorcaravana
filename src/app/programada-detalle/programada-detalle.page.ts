import { Component, OnInit } from '@angular/core';
import { Tarea } from '../services/storage.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { ToastController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ActionSheetController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-programada-detalle',
  templateUrl: './programada-detalle.page.html',
  styleUrls: ['./programada-detalle.page.scss'],
})
export class ProgramadaDetallePage implements OnInit {
  validations_form:any;
  lista_caravanas=[];
  tarea:Tarea ={
    createdAt: new Date().getTime(),
    id:'PRO_'+new Date().getTime(),
    caravanas: [],
    descripcion:"",
    tarea:""
  };

  formgroup:FormGroup;

  tareaid:string;
  constructor( 
    public toastController: ToastController,
    private storage:Storage,
    public route: ActivatedRoute,
    private router:Router,
    private nfc: NFC,
    private socialSharing: SocialSharing,
    public actionSheetController: ActionSheetController,
    private formbuilder:FormBuilder
   ) { 
    this.formgroup = formbuilder.group({
      tarea:['',[Validators.required]]
    });
    }

  ngOnInit() {
    this.tareaid=this.route.snapshot.params.id;
    this.loadCaravanas();
    if(this.tareaid){
      this.loadTarea(this.tareaid);
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

    formatCaravanas(ports=[]) {
        return ports.map(port => port.codigo).join(',');
      }

  grabar(){
    this.storage.set(this.tarea.id,this.tarea);
    //this.router.navigateByUrl('/tabs/(tareas:tareas)');
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
  
  caravanasChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
  }
  
  sendWS(){
    this.grabar();

    let mensaje = "*Tarea:* "+ this.tarea.tarea+"\r\n"+"*Descripcion:* "+ this.tarea.descripcion+"\r\n*Caravanas:* "+
    this.tarea.caravanas.map(port => port.codigo).join('\r\n');
    this.socialSharing.shareViaWhatsApp(mensaje).then().catch()
  }

  sendEmail(){
    let mensaje = "*Tarea:* "+ this.tarea.tarea+"\r\n"+"*Descripcion:* "+ this.tarea.descripcion+"\r\n*Caravanas:* "+
    this.tarea.caravanas.map(port => port.codigo).join('\r\n');
    this.socialSharing.shareViaEmail(mensaje, 'Tarea:'+this.tarea.tarea,[]).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Compartir',
      buttons: [{
        text: 'WhatsApp',
        role: 'destructive',
        icon: 'logo-whatsapp',
        handler: () => {
          this.sendWS();
        }
      }, {
        text: 'Email',
        icon: 'mail',
        handler: () => {
          this.sendEmail();
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  

}