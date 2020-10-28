import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { MainContentComponent } from './Components/main-content/main-content.component';
import { CamisetasComponent } from './Components/products/camisetas/camisetas.component';
import { ChinelosComponent } from './Components/products/chinelos/chinelos.component';
import { CanecasComponent } from './Components/products/canecas/canecas.component';
import { AzulejosComponent } from './Components/products/azulejos/azulejos.component';
import { AlmofadasComponent } from './Components/products/almofadas/almofadas.component';
import { LoginComponent } from './Components/login/login.component';
import { CadastrarComponent } from './Components/login/Template/cadastrar/cadastrar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: MainContentComponent},
  { path: 'login', component:LoginComponent},
  { path: 'login/cadastrar', component:CadastrarComponent},
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
