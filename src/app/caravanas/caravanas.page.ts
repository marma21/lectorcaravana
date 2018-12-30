import { Component, OnInit } from '@angular/core';
import { StorageService, Caravana} from '../services/storage.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-caravanas',
  templateUrl: './caravanas.page.html',
  styleUrls: ['./caravanas.page.scss'],
})
export class CaravanasPage implements OnInit {

  caravanas=[];
  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() { 
  }
  ionViewWillEnter(){
    this.loadCaravanas();
  }
  
loadCaravanas(){
  this.caravanas=[];
  this.storage.forEach((value,key,index) => {
    if (key.substring(0,4)=="CAR_"){
      this.caravanas.push(value) ;
    }
    
   }).then(()=>{})

  }

  remove(item) {
    this.storage.remove('CAR_'+item.codigo);
    this.loadCaravanas();
  }

  
  gotoDetail(id?){
    if (id==null){
      this.router.navigateByUrl('/tabs/(caravanas:caravanas-detalle/)');
    }
    else{
      this.router.navigateByUrl('/tabs/(caravanas:caravanas-detalle/'+id+')');
    }
    
  }
}
