import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-programada',
  templateUrl: './programada.page.html',
  styleUrls: ['./programada.page.scss'],
})
export class ProgramadaPage implements OnInit {

  constructor(private storage:Storage, private router:Router) { }
  tareas=[];
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.loadTareas();
  }
  
loadTareas(){
  this.tareas=[];
  this.storage.forEach((value,key,index) => {
    if (key.substring(0,4)=="PRO_"){
      this.tareas.push(value) ;
    }
   }).then(()=>{})

  }

  remove(item) {
    this.storage.remove(item.id);
    this.loadTareas();
  }

  
  gotoDetail(id?){
    if (id==null){
      this.router.navigateByUrl('/tabs/(programada:programada-detalle/)');
    }
    else{
      this.router.navigateByUrl('/tabs/(programada:programada-detalle/'+id+')');
    }
    
  }

}

