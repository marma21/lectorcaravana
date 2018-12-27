import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { CaravanasPage } from '../caravanas/caravanas.page';
import { CaravanasDetallePage } from '../caravanas-detalle/caravanas-detalle.page';
import { TareasPage } from '../tareas/tareas.page';
import { TareasDetallePage } from '../tareas-detalle/tareas-detalle.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'caravanas',
        outlet:'caravanas',
        component:CaravanasPage
      },
      {
        path: 'caravanas-detalle/:id',
        outlet:'caravanas',
        component:CaravanasDetallePage
      }, 
      {
        path: 'tareas',
        outlet:'tareas',
        component:TareasPage
      },
      {
        path: 'tareas-detalle/:id',
        outlet:'tareas',
        component:TareasDetallePage
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tareas/tareas.module#TareasPageModule'
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(caravanas:caravanas)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
