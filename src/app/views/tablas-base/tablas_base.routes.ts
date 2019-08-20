import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PensumsComponent} from './pensums/pensums.component';
import {CarrerasComponent} from './carreras/carreras.component';

export const TABLAS_BASES_ROUTES: Routes = [
  {
    path: 'pensum',
    data: {
      title: 'Pensum'
    },
    component: PensumsComponent
  },
  {
    path: 'carreras',
    data: {
      title: 'Carreras'
    },
    component: CarrerasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(TABLAS_BASES_ROUTES)],
  exports: [RouterModule]
})
export class TablasBaseRoutes {}