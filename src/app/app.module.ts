import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from "@angular/material/button";
import { MainContentComponent } from './main-content/main-content.component';
import { CamisetasComponent } from './products/camisetas/camisetas.component';
import { CanecasComponent } from './products/canecas/canecas.component';
import { ChinelosComponent } from './products/chinelos/chinelos.component';
import { AzulejosComponent } from './products/azulejos/azulejos.component';
import { AlmofadasComponent } from './products/almofadas/almofadas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainContentComponent,
    CamisetasComponent,
    CanecasComponent,
    ChinelosComponent,
    AzulejosComponent,
    AlmofadasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
