import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateAssetComponent } from './create-asset/create-asset.component';
import { ViewAssetComponent } from './view-asset/view-asset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAssetComponent } from './update-asset/update-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateAssetComponent,
    ViewAssetComponent,
    UpdateAssetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
