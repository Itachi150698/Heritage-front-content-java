import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleComponent } from './partials/middle/middle.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AboutComponent } from './partials/about/about.component';
import { ContactComponent } from './partials/contact/contact.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { AjantaComponent } from './pages/ajanta/ajanta.component';
import { ArtHeritageComponent } from './pages/art-heritage/art-heritage.component';
import { CulturalComponent } from './pages/cultural/cultural.component';
import { FortsComponent } from './pages/forts/forts.component';
import { HistoricComponent } from './pages/historic/historic.component';
import { HomeComponent } from './pages/home/home.component';
import { JewelleryComponent } from './pages/jewellery/jewellery.component';
import { NorthEastComponent } from './pages/north-east/north-east.component';
import { SiteCulturalComponent } from './pages/site-cultural/site-cultural.component';
import { WalkThroughComponent } from './pages/walk-through/walk-through.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MiddleComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    AjantaComponent,
    ArtHeritageComponent,
    CulturalComponent,
    FortsComponent,
    HistoricComponent,
    HomeComponent,
    JewelleryComponent,
    NorthEastComponent,
    SiteCulturalComponent,
    WalkThroughComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
