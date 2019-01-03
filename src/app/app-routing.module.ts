import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'programada', loadChildren: './programada/programada.module#ProgramadaPageModule' },
  { path: 'programada-detalle', loadChildren: './programada-detalle/programada-detalle.module#ProgramadaDetallePageModule' },
//  { path: 'caravanas', loadChildren: './caravanas/caravanas.module#CaravanasPageModule' },
//  { path: 'caravanas-detalle', loadChildren: './caravanas-detalle/caravanas-detalle.module#CaravanasDetallePageModule' },
//  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasPageModule' },
//  { path: 'tareas-detalle', loadChildren: './tareas-detalle/tareas-detalle.module#TareasDetallePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
