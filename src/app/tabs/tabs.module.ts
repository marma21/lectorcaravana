import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { CaravanasPageModule } from '../caravanas/caravanas.module';
import { CaravanasDetallePageModule } from '../caravanas-detalle/caravanas-detalle.module';
import { TareasPageModule } from '../tareas/tareas.module';
import { TareasDetallePageModule } from '../tareas-detalle/tareas-detalle.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    CaravanasPageModule,
    CaravanasDetallePageModule,
    TareasPageModule,
    TareasDetallePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
