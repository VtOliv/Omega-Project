
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MainContentComponent } from './Components/main-content/main-content.component';
import { CamisetasComponent } from './Components/products/camisetas/camisetas.component';
import { CanecasComponent } from './Components/products/canecas/canecas.component';
import { ChinelosComponent } from './Components/products/chinelos/chinelos.component';
import { AzulejosComponent } from './Components/products/azulejos/azulejos.component';
import { AlmofadasComponent } from './Components/products/almofadas/almofadas.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { CadastrarComponent } from './Components/login/Template/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    CamisetasComponent,
    CanecasComponent,
    ChinelosComponent,
    AzulejosComponent,
    AlmofadasComponent,
    LoginComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
