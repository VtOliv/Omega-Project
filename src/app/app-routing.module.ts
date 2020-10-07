import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { MainContentComponent } from './main-content/main-content.component';
import { CamisetasComponent } from './products/camisetas/camisetas.component';
import { ChinelosComponent } from './products/chinelos/chinelos.component';
import { CanecasComponent } from './products/canecas/canecas.component';
import { AzulejosComponent } from './products/azulejos/azulejos.component';
import { AlmofadasComponent } from './products/almofadas/almofadas.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MainContentComponent},
  { path: 'produtos/camisetas', component: CamisetasComponent},
  { path: 'produtos/chinelos', component: ChinelosComponent},
  { path: 'produtos/canecas', component: CanecasComponent},
  { path: 'produtos/azulejos', component: AzulejosComponent},
  { path: 'produtos/almofadas', component: AlmofadasComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
