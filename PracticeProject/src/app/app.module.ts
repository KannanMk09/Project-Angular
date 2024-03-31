import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { navbarComponent } from './navBar/navbar.component';
import { BodycomponentComponent } from './bodycomponent/bodycomponent.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { TrainerComponent } from './trainer/trainer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    BodycomponentComponent,
    AboutComponentComponent,
    FeaturesComponent,
    PricingComponent,
    TrainerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
