import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsignComponent } from './formsign/formsign.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WeakLabelDirective } from './weak-label.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormsignComponent,
    WeakLabelDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
